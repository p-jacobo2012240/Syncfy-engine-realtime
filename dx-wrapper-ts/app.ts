import Server from './lib/server'
import route from './routes/api'
import bodyParser from 'body-parser'
let server = new Server(3001);

//X-wwww-urlencoded or raw
server.app.use( bodyParser.urlencoded({ extended: true }))
server.app.use( bodyParser.json())

server.app.use('/api/v1/', route )


server.Start( ()=>{
    console.log(`Server on Port Listening ${server.port} `)
})