const app = require('./app.js')
const products = require('./contenedor')


const server = app.listen(8080, () =>{
    console.log(`conectado al puerto ${server.address().port}`)
})


server.on('error', (err)=>console.log(`Error en el servidor ${err}`));
