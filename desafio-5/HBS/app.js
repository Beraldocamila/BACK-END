const express = require('express');
const app = express();
const path = require('path');
const router= require('./routes/productosRoutes');

const port = 8080 || process.env.PORT;

app.set('views', './views');
app.set('view engine', 'hbs')

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/productos', router);

const server = app.listen(port,()=>{
    console.log(`se esta escuchando en el puerto ${port}`)
})

server.on('error', err=>(console.log(err)));