import { Router, Request, Response } from 'express'

    let route = Router();

    route.get('/messages',  async (req: Request, res: Response )=>{
        
        try {
         
            let r = await res.status(200).json({
                message: 'List Data',
                modeDeveloping : true
            })
            
        } catch (e) {
            res.send({ error: `this error : ${e }` })
        } 
    })

    route.post('/messages', async(req: Request, res : Response  )=>{

        try {

            let h = await res.status(201).json({
                message: 'Created',
                data : req.body
            })
            
        } catch (e) {
            res.send({ error: `this error : ${e }` })
        }
    }) 



export default route