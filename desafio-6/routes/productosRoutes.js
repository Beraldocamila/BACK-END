const {Router} = require('express')
const router=Router();

const products = require('../contenedor')


// mostrar productos
router.get('/', (req, res)=>{
    res.render('addProduct.hbs', {productos:products.getAll()})
})

router.get('/mostrarProductos', (req, res)=>{
    res.render('productos.hbs', {productos:products.getAll()})
})

// agregar producto

router.post('/add', (req,res)=>{
    products.postProd(req.body);
    res.redirect('/productos')

})


module.exports = router;