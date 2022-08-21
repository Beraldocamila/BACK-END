const express = require('express');
const router = express.Router();
const products = require('../contenedor')


router.get('/', (req,res)=>{
  res.send(products.getAll())
});

router.get('/:id',(req,res)=>{
  let oneProd= products.getProdId(req.params.id);
  if(oneProd.length == 0){
    res.send('Producto no encontrado')
  }else{
    res.send({oneProd});

  }
});

router.post('/', (req,res)=>{
  res.send(products.postProd(req.body));
})

router.put('/:id', (req,res)=>{
  res.send({ producto: products.putProd(req.params.id, req.body)})
})

router.delete('/:id', (req,res)=>{
  res.send({productos: products.deleteProd(req.params.id)})
})



module.exports = router;
