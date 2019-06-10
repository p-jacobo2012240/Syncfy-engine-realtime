import { Router } from 'express'
import { UsersCtrl } from '../controllers/userController'

let app = Router()
let usersCtrl = UsersCtrl.getInstance

app.get('/', usersCtrl.getUsers )  
app.get('/detail', usersCtrl.usersDetail)

export default app;