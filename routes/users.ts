import { 
    Router, 
    Request, 
    Response 
} from 'express'

export let app = Router()


app.get('/users', (req: Request, res: Response)=>{
    console.log('holaaa')
})

