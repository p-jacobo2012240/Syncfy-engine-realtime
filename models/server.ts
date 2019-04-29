import express from 'express'

export class Server{

    public app : express.Application
    public port : Number = 3002 || process.env.PORT
    public hck : any

    constructor(){
        this.app = express()
        this.port
    }

    async start( callback : any ){

        this.hck = await this.app.listen(  this.port, callback)

    }

}