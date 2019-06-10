import { Server } from './models/server'

//basic-routes
import  userCtrl   from './routes/users'
import  msgCtrl  from './routes/messages'

import bodyparser from 'body-parser'
import cors from 'cors'

let server = Server.instance

//Body-Parser
server.app.use(
    bodyparser.urlencoded({ 
        extended: true 
    })
)

server.app.use( bodyparser.json() )

//Cors Config
server.app.use( cors({ 
    origin: true, 
    credentials: true 
}))

//Routes
server.app.use('/api', userCtrl)
server.app.use('/messages',  msgCtrl )

server.start( ()=>{
    console.log(`
        Server On Port Listen ${server.port} 
    `)
})