import { 
    Router, 
    Request, 
    Response 
} from 'express'

import user from '../controllers/userController'

export let app = Router()


app.get('/users', (req: Request, res: Response)=>{
    console.log('holaaa')
})

app.get('/usersdb', user.getUsers )