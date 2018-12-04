const express = require('express')
const app = express()
const skIO = require('socket.io')
const http = require('http')

let server = http.createServer(app)

process.env.PORT = process.env.PORT || 3000

app.use( express.static( __dirname + '/public'))

app.get('/', (req, res)=>{

    res.send({ message: 'Peticion Exitosa'})
})

let io = skIO(server)

io.on('connection', (client)=>{
    
    console.log('Usuario Activo')

    client.on('disconnect', ()=>{
        console.log('Usuario offLine')
    })

    client.on('sendMessage', (message)=>{
        console.log(message)
    })

})

server.listen(process.env.PORT, ()=>{
    console.log(`
        Server Online -> ${process.env.PORT}
    `)
})