import { Socket } from 'socket.io';
import SocketIO from 'socket.io'

export const disconnect = ( client: Socket ) => {

    client.on('disconnect', ()=>{
        console.log(`[disconnect] : this client is: ${ client} `)
    })

}

//Observer Socket

export const messages = ( client: Socket, io: SocketIO.Server )  =>{

    client.on('message', ( payload : any )=>{
        console.log('mensaje resibido', payload )
        
        io.emit('listen-messages', payload   ) 

        //Emmiting User login
        io.emit('login-method', payload )

    })
}



// Login User
  
export const loginMethod = ( user : Socket, io : SocketIO.Server ) =>{

    user.on('login-method', (payloadUser : any )=>{
        console.log('username resibido', payloadUser )

        //io.emit('login-method', payloadUser )
    })
} 