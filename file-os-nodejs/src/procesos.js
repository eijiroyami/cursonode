const emitter = require('events').EventEmitter

LoopProcesos = (num) => {
    var e = new emitter();

    setTimeout(()=>{
        for (let i = 0; i < num; i++) {
            e.emit('inicio',i)
            console.log(`${new Date().getMilliseconds()} : proceso ${i}`)
            e.emit('fin', i);
        }
    }, 1000)
    return e;
};

const lp = LoopProcesos(3);

lp.on('inicio', data => {
    console.log(`${new Date().getMilliseconds()}: Iniciando proceso ${data}`)    
})

lp.on('fin', data =>{
    console.log(`${new Date().getMilliseconds()}: Fin de procesos ${data}`)
})