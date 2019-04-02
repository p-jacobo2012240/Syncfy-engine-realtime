import  express from 'express'

export default class Server{

    public app = express.application;
    public port : number =  Number( process.env.PORT_SK ) || 3001;

    constructor(port : number ){

        this.app = express()
        this.port = port
    }
  
    async Start( callback : Function ){
        let init = await this.app.listen( this.port, callback )
    }


}


