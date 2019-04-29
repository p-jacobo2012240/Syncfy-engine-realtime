import express from 'express'
import skIO from 'socket.io'
import http from 'http'

export class Server{
  
    public app          : express.Application
    public port         : Number = 3002 || process.env.PORT
    public hck          : any
    public io           : skIO.Server
    public httpServer   : http.Server

    constructor(){
        this.app = express()
        this.port

        this.httpServer = new http.Server( this.app )
        this.io = skIO( this.httpServer ) 
        this.listenSockets()
    }

    private listenSockets(){

        this.io.on('connection', client =>{

            console.log(`[connected ] : this client is: ${client} `)

        })
    }

    async start( callback : any ){

        this.hck = await this.httpServer.listen(  this.port, callback )

    }

}