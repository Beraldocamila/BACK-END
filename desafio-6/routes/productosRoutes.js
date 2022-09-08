const {Router} = require('express')
const router=Router();

const products = require('../contenedor')


// mostrar productos
router.get('/', (req, res)=>{
    res.render('addProduct.handlebars', {products:products.getAll()})
})

router.get('/productos', (req, res)=>{
    res.render('productos.handlebars', {products:products.getAll()})
})

// agregar producto

router.post('/productos', (req,res)=>{
    products.postProd(req.body);
    res.redirect('/productos')

})


module.exports = router;