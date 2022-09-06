const express = require('express');
const handlebars = require("express-handlebars").engine;
const app = express();
const router= require('./routes/productosRoutes');


app.engine("hbs", handlebars({
    extname:".hbs",
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + "/views/layouts"
}));


app.set('views', './views');
app.set('view engine', '.handlebars')
app.use(express.static("public"))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/productos', router);

module.exports=app

