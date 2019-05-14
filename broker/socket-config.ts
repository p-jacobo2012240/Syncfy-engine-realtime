import { Socket } from 'socket.io';


export const disconnect = ( client: Socket ) => {

    client.on('disconnect', ()=>{
        console.log(`[disconnect] : this client is: ${ client} `)
    })

}

//Observer Socket

export const messages = ( client: Socket) =>{

    client.on('message', ( payload : any )=>{
        console.log('mensaje resibido', payload )
    })

}