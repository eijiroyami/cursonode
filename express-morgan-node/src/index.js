const express=require('express')
const logger = require('morgan')
const app = express()
//middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(logger('dev'))
//rutas
app.use('/',require('./rutas/pagina.ruta'));

app.use('/api-mittrils',require('./rutas/api.rutas'))

//server
app.listen(3000, () =>{
    console.log('Aplicacion ejemplo, escuchando 3000s')
})