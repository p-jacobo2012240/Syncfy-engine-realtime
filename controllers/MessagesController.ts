import { 
    Request,
    Response
 } from 'express'
import { Server } from '../models/server';


export class MessagesCtrl {

    private static _getInstance : MessagesCtrl

    public static get getInstance(){
        return this._getInstance || ( this._getInstance = new this ) 
    } 

    constructor(){}

    public async sendOneToOne( req: Request, res: Response ) : Promise<any>{

        let ctx = {
            id : req.params.id,
            data : req.body.data,
            of: req.body.of
        }

        let server = Server.instance
        server.io.in( req.params.id  ).emit('one-to-one', ctx )

        try {
   
            let result = await res.status(200).json({
                ok: true,
                msg : 'sent..',
                context_msg: [
                    ctx.id,
                    ctx.data,
                    ctx.of
                ]
            })
            
        } catch (e) {
            res.json(`
                An error has occurred : ${e}
            `)
        }

    }
    
    public async sendOneToMany(req: Request, res:Response ) : Promise<any>{

        //las estructuras deben de ser paralelamente simetricas en cuanto a sus atributos

        let ctx ={
            body : req.body.body,
            of: req.body.of
        }

        let server = Server.instance
        server.io.emit('listen-messages', ctx )

        try {

            let result = await res.status(200).json({
                ok: true,
                message: 'send...',
                ctx
            })
            
        } catch (e) {
            res.send({ message: `
            An error has occurred : ${e}
            `})
        }
    }

 }

