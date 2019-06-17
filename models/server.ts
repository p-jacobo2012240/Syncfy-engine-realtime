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

            console.log(`[connected ]`)
            console.log(client.id)

            //Registers Async Processes

            /**
             * client Persist
             * @param clientConnected
             * @return clienPersist
             */
            broakerConfig.clientConnected( client, this.io )

            /**
             * @param client [in-memory]
             * @return full-list
             */
             broakerConfig.listUsersInMemory( client, this.io )

            /**
             * Disconnect And Send
             * Notify rest users
             */
            broakerConfig.disconnect( client, this.io )
            
            /**
             * @param HandleCtrl(client)
             * @return observable SocketIo
             */
            broakerConfig.messages(client, this.io )

            /**
             * 
             * @param Handle Object (user)
             * @return void user
             */
            broakerConfig.loginMethod( client, this.io )
   
        })
    }

    async start( callback : any ){

        this.hck = await this.httpServer.listen(  this.port, callback )

    }

}