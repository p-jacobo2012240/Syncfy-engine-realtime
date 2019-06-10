import { Request, Response  } from 'express'
import { Server } from '../models/server'
import { Socket } from 'socket.io';
import { serverCtrl } from '../broker/socket-config'

export class UsersCtrl{

    private static _getInstance : UsersCtrl

    public static get getInstance(){
        return this._getInstance || ( this._getInstance = new this )
        
    }

    constructor(){}

    public async getUsers( req: Request, res: Response ) : Promise<any>{

        let server = Server.instance
        server.io.clients( (err: any, usersOnline: Socket )=>{

            try {

                if(err){
                    return res.status(400).json({
                        ok: false,
                        errors: err
                    })
                }

                res.status(200).json(usersOnline)
                
            } catch (e) {
                res.status(409).json({message: `
                    error is ${e}
                `})
            }

        })
    }
    
    //BUILD FUNCTION....
    public async usersDetail(req: Request, res: Response ) : Promise<any>{
  
        try {

            let result = await res.status(200).json({
                ok: true,
                users:  serverCtrl.getList()
            })
            
        } catch (e) {
            res.status(409).json({message: `
                error is ${e}
            `})
        }
    }

}
