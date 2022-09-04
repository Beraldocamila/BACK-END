const express = require('express');
const app = express();
const path = require('path');
const router= require('./routes/productosRoutes');

const handlebars = require('express-handlebars');

app.engine("hbs", handlebars({
    extname: ".hbs",
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + "views/layouts",
    partialsDir: __dirname + "views/partials/"  
    })
);



app.set('views', './views');
app.set('view engine', 'hbs')
app.use(express.static("public"))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/productos', router);

const port = 8080 || process.env.PORT;
const server = app.listen(port,()=>{
    console.log(`se esta escuchando en el puerto ${port}`)
})

server.on('error', err=>(console.log(err)));