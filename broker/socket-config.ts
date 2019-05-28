import { Socket } from 'socket.io';
import SocketIO from 'socket.io'
import { ServerCtrl } from '../controllers/serverCtrl'
import { User } from '../models/user';


export const serverCtrl = new ServerCtrl()

export const disconnect = ( client: Socket ) => {

    client.on('disconnect', ()=>{
        console.log(`[disconnect] : this client is: ${ client }  `)

        serverCtrl.rmUser( client.id )

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

    user.on('login-method', (payloadUser : any, callback : Function  )=>{
        console.log('username resibido', payloadUser )

        serverCtrl.updateUser( user.id, payloadUser.username )  

        callback({
            ok: true,
            message : `usaurio ${  JSON.stringify( payloadUser) } configured`
        })
        
    })
} 


export const clientConnected = (  client : Socket)=>{

    let user = new User( client.id )
    serverCtrl.addUser( user )

}