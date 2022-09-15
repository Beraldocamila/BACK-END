var express = require('express');
var routerProducto = express.Router();
const products = require('../contenedor')

//mostrar producto por id
routerProducto.get('/:id', (req,res) =>{
    let oneProd= products.getProdId(req.params.id);
    if(oneProd.length == 0){
        res.send('Producto no encontrado')
    }else{
        res.send(oneProd);
    }
})
// mostrar productos
routerProducto.get('/', (req, res)=>{
    const data = products.getAll();
    res.send(data)
})

// agregar producto
routerProducto.post('/', (req,res)=>{
    let datos = products.postProd(req.body);
    
    if(!datos.nombre){
        return res.status(400).json({msg: `el campo nombre es obligatorio`})
    }
    if(!datos.descripcion){
        return res.status(400).json({msg: `el campo descripcion es obligatorio`})
    }
    if(!datos.codigo){
        return res.status(400).json({msg: `el campo codigo es obligatorio`})
    }
    if(!datos.foto){
        return res.status(400).json({msg: `el campo foto es obligatorio`})
    }
    if(!datos.precio){
        return res.status(400).json({msg: `el campo precio es obligatorio`})
    }
    if(!datos.stock){
        return res.status(400).json({msg: `el campo stock es obligatorio`})
    }

    res.send(datos);
})

//Actualizar producto por su id
routerProducto.put('/:id', (req,res)=>{
    res.send({ producto: products.putProd(req.params.id, req.body)})
})

//Eliminar producto por su id
routerProducto.delete('/:id', (req,res)=>{
    res.send({productos: products.deleteProd(req.params.id)})
})



module.exports = routerProducto;