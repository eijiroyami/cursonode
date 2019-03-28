const express = require('express')
const app = express()
const path = require('path')
//const morgan = require('morgan')
const alumnos = require('./data/alumnos.json')

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
//app.use(morgan('combined'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', (req,res)=>{
    res.render('index', {titulo:'plantilla hbs', datos:alumnos});
});

app.listen(app.get('port'), ()=>{
    console.log(`${new Date()}: server on port ${app.get('port')}`);    
})