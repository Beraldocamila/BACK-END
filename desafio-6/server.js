const app = require('./app.js')
const PORT = 8080 || process.env.PORT;
const {Server:HttpServer} = require('http')
const {Server:IOServer} = require('socket.io')

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

const products = require('./contenedor')

let messages =[];


const server = httpServer.listen(PORT,()=>{
    console.log(`SERVER ON`)
})

server.on('error', (err)=>console.log(`Error en el servidor ${err}`));

server.on('error',(err)=>{
    console.log(err);
});

io.on('connection', (socket)=>{
    console.log('Se conectó un cliente');
    socket.emit('messages', {messages, products:products.getAll()})

    socket.on('new-message', (data)=>{
        messages.push(data);
        let all = {messages: messages, products:products.getAll()}
        io.sockets.emit('messages', all)
    })

    socket.on('new-product', (data)=>{
        products.postProd(data);
        let all = {messages: messages, products:products.getAll()}
        io.sockets.emit('messages', all)
    })
})