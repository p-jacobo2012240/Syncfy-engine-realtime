import { 
    Router, 
    Request, 
    Response } 
from 'express'

let app = Router();

app.get('/messages',  async (req: Request, res: Response )=>{
        
    try {
        
        let r = await res.status(200).json({
            message: 'List Data',
            modeDeveloping : true
        })

    } catch (e) {
        res.send({ error: `this error : ${e }` })
    } 
})

app.post('/messages', async(req: Request, res : Response  )=>{

    try {

        let h = await res.status(201).json({
            message: 'Created', 
            data : req.body
        })
            
    } catch (e) {
        res.send({ error: `this error : ${e }` })
    }
})

app.post('/messages/:id', async(req: Request, res: Response )=>{
    
    try{

        let hck = await res.status(200).json({
            message: `Send for id: ${req.params.id}`,
            data: req.body
        })

    }catch(e){
        res.send({ error: `this error : ${e }` })
    }
})

export default app