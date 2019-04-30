import { Request, Response  } from 'express'
import { Users } from '../models/users'

export let usersCtrl = {

   getAllUsers : (req: Request, res : Response )=>{

        let err : any
      
        Users.getAllUsers( err, (usersDb : any ) =>{
            if(err){
                return res.status(400).json({
                    ok: false,
                    message: 'Error de DB',
                    errors: err
                })
            }

            res.status(200).json(usersDb)
        })
   
    } 

   

}

