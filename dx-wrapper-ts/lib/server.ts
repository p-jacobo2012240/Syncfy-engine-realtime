import  express from 'express'
import skIO from 'socket.io'
import http from 'http'

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
        
        this.statusSocket()
    }

    private statusSocket(){

        this.io.on('connection', client =>{

            console.log('client connected')
            
            client.on('disconnect' , ()=>{
                console.log('client disconnected')
            })


        })
    }
  
    async Start( callback : any ){
        let init = await this.HttpServe.listen( this.port, callback ) 
    }


}


