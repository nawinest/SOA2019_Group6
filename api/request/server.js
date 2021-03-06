const app = require('./app')
const socket = require('socket.io')

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
    console.log("Server run on port: ", server.address().port)
})

//open io 
io = socket(server)
io.on('connection', (socket) => {
    // console.log('New user connected on IO')
    //mechanic calling from client
    //reciever => mechanic
    //publisher => client
    socket.on('callMechanic', (data) => {
        io.sockets.emit(data.mechanic_id, data)
    })

    //mechanic accept call
    //reciever => client
    //publisher => mechanic
    socket.on('acceptcall', (data)=>{
        console.log(data)
        io.sockets.emit(data.customer_id, {data:data})
        // if(data.customer_id){
        //     console.log(data.customer_id + `<< from accept call`)
        //     io.socket.emit('5ccf2c46e6c186f97caf1e38', {data:data})
        // }
    })

    socket.on('newMessage', (data) => {
        console.log("Message sent to server on:"+"newMessage")
        console.log(data)
        io.sockets.emit(data.channal, data.data)
    })

    socket.on('successService', (data) => {
        console.log("Message sent to server on:"+"successService")
        console.log(data.customer_id)
        io.sockets.emit(data.customer_id, {reset:true})
    })
})


