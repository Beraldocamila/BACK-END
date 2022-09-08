const {Router} = require('express')
const router=Router();

const products = require('../contenedor')


// mostrar productos
router.get('/', (req, res)=>{
    res.render('addProduct.handlebars', {productos:products.getAll()})
})

router.get('/mostrarProductos', (req, res)=>{
    res.render('productos.handlebars', {productos:products.getAll()})
})

// agregar producto

router.post('/', (req,res)=>{
    products.postProd(req.body);
    res.redirect('/productos')

})


module.exports = router;