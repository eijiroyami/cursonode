const http=require('http')
const servidor = http.createServer((req,resp)=>{
    resp.writeHead(200, {'Content-type':'text/html'})
    resp.write(`
    <!DOCTYPE html>
    <html>
        <head></head>
        <body>
            <h1>Sitio en Desarrollo</h1>
        </body>
    </html>`);
    resp.end();
});
servidor.listen(3000);
console.log('Servidor web iniciado en el puerto 3000')