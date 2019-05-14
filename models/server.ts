import express from 'express'
import skIO from 'socket.io'
import http from 'http'

//Helper Broaker-Messages
import * as broakerConfig from '../broker/socket-config'

export class Server{

    private static _instance : Server
  
    public app          : express.Application
    public port         : Number = 3002 || process.env.PORT
    public hck          : any  
    public io           : skIO.Server
    public httpServer   : http.Server

    private constructor(){
        this.app = express()
        this.port

        this.httpServer = new http.Server( this.app )
        this.io = skIO( this.httpServer ) 
        this.listenSockets()
    }

    public static get instance(){
       //if( this._instance == null ){
            return this._instance || ( this._instance = new this )
       //}else{} 
    }
    
    private listenSockets(){

        this.io.on('connection', client =>{

            console.log(`[connected ] : this cli ent is: ${ client} `)

            //Disconnect
            broakerConfig.disconnect( client )
            
            /**
             * @param HandlerCtrl(client)
             * @return observable SocketIo
             */
            broakerConfig.messages(client)

        })
    }

    async start( callback : any ){

        this.hck = await this.httpServer.listen(  this.port, callback )

    }

}