const mysql = require('mysql')

let params = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'kinal'
}

let cnn = mysql.createPool( params )

module.exports = cnn