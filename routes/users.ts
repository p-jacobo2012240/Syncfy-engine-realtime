import { Router } from 'express'
import { UsersCtrl } from '../controllers/userController'

let app = Router()
let usersCtrl = UsersCtrl.getInstance

app.get('/', usersCtrl.getUsers )

export default app;