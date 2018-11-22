const express = require('express')
const app = express()

process.env.PORT = process.env.PORT || 3000

app.use( express.static( __dirname + '/public'))

app.get('/', (req, res)=>{

    res.send({ message: 'Peticion Exitosa'})
})

app.listen(process.env.PORT, ()=>{
    console.log(`
        Server Online -> ${process.env.PORT}
    `)
})