const os = require('os')
const fs = require('fs')

const propiedades = {
    so: os.platform(),
    version: os.release(),
    total_memoria: os.totalmem()/1024/1024/1024,
    memoria_libre: os.freemem()/1024/1024/1024    
}

const leerDatos = (error, datos) => {
    if(error)
        console.log(error)
    else
        console.log(`${new Date().getMilliseconds()} : config = ${datos}`);
}

fs.writeFile('./src/data/config.json', JSON.stringify(propiedades, null, 2), error => {
    if(error)
        console.log(error);
    else
        console.log(`${new Date().getMilliseconds()} : 'archivo creado con exito'`);
});

/*fs.readFile('./src/data/config.json', (error,datos) => {
    if(error)
        console.log(error)
    else
        console.log(`${new Date().getMilliseconds()} : config = ${datos}`);    
});*/


fs.readFile('./src/data/config.json', leerDatos);

console.log(`${new Date().getMilliseconds()}: proceso terminado`)
