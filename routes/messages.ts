import { Router } from 'express'
import { MessagesCtrl } from '../controllers/MessagesController'

let app =  Router()

let MsgCtrl = MessagesCtrl.getInstance

//Send private message
app.post('/:id', MsgCtrl.sendOneToOne)
//Send Broadcast 
app.post('/', MsgCtrl.sendOneToMany)

export default app;