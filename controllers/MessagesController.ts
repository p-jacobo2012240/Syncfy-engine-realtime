import { 
    Request,
    Response
 } from 'express'


export class MessagesCtrl {

    private static _getInstance : MessagesCtrl

    public static get getInstance(){
        return this._getInstance || ( this._getInstance = new this ) 
    } 

    constructor(){}

    public async sendOneToOne( req: Request, res: Response ) : Promise<any>{

        //console.log('llegaste aqui')
        let ctx = {
            id : req.body.id,
            data : req.body.data,
            of: req.body.of
        }

        try {

            let result = await res.status(200).json({
                ok: true,
                msg : 'sent..',
                ctx
            })
            
        } catch (e) {
            res.json(`
                An error has occurred : ${e}
            `)
        }

    } 

 }

