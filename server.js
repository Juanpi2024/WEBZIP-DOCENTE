const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 8088;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'text/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.pdf': 'application/pdf',
    '.zip': 'application/zip',
    '.txt': 'text/plain; charset=utf-8'
};

const server = http.createServer((req, res) => {
    // Decodificar la URL para manejar espacios y caracteres especiales
    let requestUrl = decodeURIComponent(req.url);
    
    // Quitar parámetros de consulta (?v=...) para evitar fallos de lectura física de archivos
    if (requestUrl.includes('?')) {
        requestUrl = requestUrl.split('?')[0];
    }
    
    // Si se pide la raíz, cargar el index.html
    if (requestUrl === '/') {
        requestUrl = '/index.html';
    }
    
    let filePath = path.join(__dirname, requestUrl);
    
    // SOPORTE DE SERVICIO MULTI-DIRECTORIO INTELIGENTE:
    // Si el archivo no existe en la carpeta actual (webzip-docente/), pero existe en la superior (apps/),
    // lo servimos desde allí automáticamente (ej: ZIPs de distribución, PDFs de previsualización y PNGs de fondo)
    if (!fs.existsSync(filePath)) {
        const parentPath = path.join(__dirname, '..', requestUrl);
        if (fs.existsSync(parentPath)) {
            filePath = parentPath;
        }
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = MIME_TYPES[extname] || 'application/octet-stream';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == 'ENOENT') {
                res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end(`❌ Archivo no encontrado: ${requestUrl}`, 'utf-8');
            } else {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end(`❌ Error interno del servidor: ${err.code}`);
            }
        } else {
            // Agregar cabeceras de descarga de archivos para los ZIPs
            const headers = { 'Content-Type': contentType };
            if (extname === '.zip') {
                headers['Content-Disposition'] = `attachment; filename="${path.basename(filePath)}"`;
            }
            
            res.writeHead(200, headers);
            res.end(content, 'utf-8');
        }
    });
});

server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.error(`\n❌ ERROR: El puerto ${PORT} ya está en uso.`);
        console.error(`Cierra otros servidores locales e intenta nuevamente.\n`);
        process.exit(1);
    }
});

server.listen(PORT, () => {
    console.log(`=============================================================`);
    console.log(`🚀 WEBZIP DOCENTE: "TU AULA EN UN CLIC" INICIADO CON ÉXITO`);
    console.log(`=============================================================`);
    console.log(`👉 Accede desde tu navegador: http://localhost:${PORT}`);
    console.log(`🎮 Pasarela de Pago Webpay y Descargas ZIPs Reales Habilitadas.`);
    console.log(`-------------------------------------------------------------`);
    console.log(`Conserva esta ventana abierta para mantener el portal activo.`);
    console.log(`=============================================================`);
    
    // Auto-lanzar navegador predeterminado en Windows
    exec(`start http://localhost:${PORT}/`);
});
