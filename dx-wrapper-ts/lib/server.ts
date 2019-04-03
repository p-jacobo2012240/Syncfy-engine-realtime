import  express from 'express'
import skIO from 'socket.io'
import http from 'http'
import { AnyAaaaRecord } from 'dns';

export default class Server{

    public app = express.application;
    public port : number =  Number( process.env.PORT_SK ) || 3001;

    public io : skIO.Server
    private HttpServe : http.Server

    constructor(port : number ){
  
        this.app = express()
        this.port = port

        this.HttpServe = new http.Server( this.app )
        this.io = skIO( this.HttpServe )
        
        this.poolConnections()
    }

    private async poolConnections(){

        //getting pool connections
        let h = await this.io.on('connect', client =>{

            console.log('new client connected')

        })
    }
  
    async Start( callback : any ){
        let init = await this.HttpServe.listen( this.port, callback ) 
    }


}


