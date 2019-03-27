const express=require('express')
const app=express()

app.get('/', (req, res)=>{
    res.send('Hola Mundo!')
})

app.listen(3000, ()=>{
    console.log('Aplicacino de ejemplo, escuchando el puerto 3000')
})