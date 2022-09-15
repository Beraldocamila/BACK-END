const express = require('express');
const app = express();

const routerProducto = require('./routes/productos');
const routerCarrito = require('./routes/carrito');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/producto', routerProducto);
app.use('/api/carrito', routerCarrito);

module.exports=app

