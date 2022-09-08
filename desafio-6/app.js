const express = require('express');
const handlebars = require('express-handlebars').engine;
const app = express();
const router= require('./routes/productosRoutes');

const handlebarsConig = {
    defaultLayout: 'index.handlebars',
  };
app.engine('handlebars', handlebars(handlebarsConig));

// app.engine("hbs", handlebars({
//     extname:".hbs",
//     defaultLayout: 'index.hbs',
//     layoutsDir: __dirname + "/views/layouts"
// }));

app.set('view engine', '.handlebars')
app.set('views', './views');

app.use(express.static("public"))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/', router);

module.exports=app

