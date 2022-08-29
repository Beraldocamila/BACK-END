const express=require('express');
const router=express.Router();
const products = require('../contenedor')

// mostrar productos
router.get('/mostrarProductos', (req, res)=>{
    const data = products.getAll();
    res.render('productos', {productos:data})
})

// agregar producto
router.get('/agregarProducto', (req, res)=>{
    res.render('addproduct')
})

router.post('/', (req,res)=>{
    let datos = products.postProd(req.body);
    res.redirect('/productos/agregarProducto')

})

router.get('/detalle/:id', (req,res) =>{
    let oneProd= products.getProdId(req.params.id);
    if(oneProd.length == 0){
        res.send('Producto no encontrado')
    }else{
        res.render('productos', {productos: oneProd});
    }
})

module.exports = router;