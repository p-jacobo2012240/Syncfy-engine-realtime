
    const socket = io();
        
    socket.on('connect', ()=>{
        console.log('Socket Up')
    })

    socket.on('disconnect', ()=>{
        console.log('Se perdio la conexion')
    })
        
    socket.emit('sendMessage', {
        user: 'Hackobo',
        message: 'Hola devs'
    }, (res)=>{
        console.log('el servidor dice', res)
    })

    socket.on('sendMessage', (res)=>{
        console.log('Servidor Dice:', res )
    })
