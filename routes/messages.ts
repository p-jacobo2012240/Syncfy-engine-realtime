import { Router } from 'express'
import { MessagesCtrl } from '../controllers/MessagesController'

let app =  Router()

let MsgCtrl = MessagesCtrl.getInstance

app.post('/', MsgCtrl.sendOneToOne )

export default app;