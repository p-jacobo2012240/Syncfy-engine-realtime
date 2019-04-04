import { 
    Router, 
    Request, 
    Response } 
from 'express'

import Maps from '../lib/map';
import AppServer  from '../lib/server'

let app = Router();

let map = new Maps()


app.get('/map', async (req: Request, res: Response )=>{

    let x = await res.json( map.getCoords() )

})


app.post('/map', (req: Request, res : Response  )=>{

    let lat =  Number(req.body.lat)
    let lng =  Number(req.body.lng)

    let ioConfig = new AppServer(3001)
    ioConfig.io.emit('change-position', map.getCoords() )

    map.addPosition( lat, lng)

    res.json( map.getCoords()  )
})


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