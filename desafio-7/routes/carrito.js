var express = require('express');
const { route } = require('./productos');
var routerCarrito = express.Router();
const products = require('../contenedor');

const carritos= [];
let carritoId= 0;

//Crea carrito y devuelve id
routerCarrito.post('/', (req,res)=>{
    // const carritoDatos = req.body;

    const carrito = {
        id: carritoId ++,
        timestamp: Date.now(),
        productos: []
    }

    carritos.push(carrito);
    res.status(201).json(carrito);
})

//vacia un carrito y lo elimina 
routerCarrito.delete('/:id', (req,res)=>{
    const idCarrito = req.params.idCarrito

    let finalCarritos = carritos.filter(c=>c.id != Number(idCarrito))
    carritos = finalCarritos;
    res.json(carritos);
})

//listar productos guardados en el carrito
routerCarrito.get('/:id/productos', (req,res)=>{
    const idCarrito = req.params.idCarrito
    const unCarrito = carritos.find(c=> c.id==idCarrito)
    if(unCarrito == -1){
        return res.status(400).json({msg:`el curso con id ${idCarrito} no existe.`})
    }
    const carrito = carritos[unCarrito]
    res.json(carrito)
})

//guardar productos en el carrito
routerCarrito.post('/:id/productos', (req,res)=>{
    const idCarrito = req.params.idCarrito
    const idproducto = req.body.id;
    const unCarrito = carritos.find(c=> c.id==idCarrito)
    if(unCarrito == -1){
        return res.status(400).json({msg:`el curso con id ${idCarrito} no existe.`})
    }
    const carrito = carritos[unCarrito]

    const producto= products.getProdId(idproducto);

    if(!producto){
        return res.status(400).json({msg:`el producto con id ${idproducto} no existe.`})
    }
    carrito.productos.push(producto)


})

//eliminar producto guardado en el carrito
routerCarrito.delete('/:id/productos/:id_prod', (req,res)=>{
    
})


module.exports = routerCarrito;
