import { Server } from './models/server'
import { app } from './routes/users'
import bodyparser from 'body-parser'

let server = new Server()

//Body-Parser
server.app.use(bodyparser.urlencoded({ extended: true }))
server.app.use( bodyparser.json() )
   
//Routes
server.app.use('/api', app)

server.start( ()=>{
    console.log(`
        Server On Port Listen ${server.port} 
    `)
})