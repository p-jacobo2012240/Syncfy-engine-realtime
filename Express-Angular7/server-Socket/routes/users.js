const express = require('express')
const app = express.Router()

const modelUser = require('../models/user')

app.get('/', (req, res)=>{

    modelUser.getUsers( (err, usersDB)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                message: 'error en db',
                errors: err
            })
        }

        res.status(200).json(usersDB)
    })
})

module.exports = app