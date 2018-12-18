const { io } = require('../app')

io.on('connection', (client)=>{
    
    console.log('Usuario Activo')

    client.emit('sendMessage', {
        user: 'Admin',
        message: 'Bienvenido a la aplicacion'
    })

    client.on('disconnect', ()=>{
        console.log('Usuario offLine')
    })

    client.on('sendMessage', (message, callback)=>{
        
        if(message.user){
            callback({
                res: 'Todo ha ido bien'
            })
        }else{
            callback({
                res: `no se ha enviado ${message.usuario}`
            })
        }

    })

})