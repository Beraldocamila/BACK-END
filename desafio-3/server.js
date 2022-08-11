const express = require('express');
const app = express();
const products = require('./contenedor.js');



app.get('/productos', (req,res)=>{
    products.getAll()
    .then((data)=> {
        res.send(data)
    })
})

app.get('/productoRandom', (req,res)=>{
    products.getRandom()
    .then((data)=> {
        res.send(data)
    })
})
const PORT = 8080;

const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`)
})

server.on("error", err=>console.log(`Error en el servidor: ${err}`))