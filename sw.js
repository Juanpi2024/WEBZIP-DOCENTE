const CACHE_NAME = 'webzip-docente-v3';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/app.js',
  './manifest.json',
  './icon.svg',
  './preview1.png',
  './preview2.png',
  './preview_math1.png',
  './preview_math2.png'
];

// Install Event - Pre-cache core shell
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[Service Worker] Caching app shell and core assets');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event - Clean up deprecated legacy caches
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Service Worker] Clearing old cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Cache-First with Network Fallback, excluding heavy ZIPs and PDFs
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  
  // NEVER cache massive ZIP packages or PDF documents in the Service Worker cache
  if (url.pathname.endsWith('.zip') || url.pathname.endsWith('.pdf')) {
    return; // Pass through to browser standard downloads / direct fetch
  }

  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      
      return fetch(e.request).then((networkResponse) => {
        // Cache standard static GET resources dynamically
        if (
          e.request.method === 'GET' && 
          networkResponse.status === 200 &&
          !url.pathname.includes('/.github/')
        ) {
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, networkResponse.clone());
            return networkResponse;
          });
        }
        return networkResponse;
      }).catch(() => {
        // Serve index shell as offline fallback for page navigation
        if (e.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
