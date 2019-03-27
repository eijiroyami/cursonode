const express = require('express')
const morgan = require('morgan')
const app = express()

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
//const accessLogStream = fs.createWriteStream(path.join(__dirname, 'log.log'), { flags: 'a' })
//app.use(morgan('dev', { stream: accessLogStream }))
//app.use(morgan('common', { skip: function(req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
//console.log(morgan())

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.use('/api-cognos/alumnos', require('./rutas/alumnos.rutas'));

//starting this server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})
