const db = require('../db/db')

let users = {

    getUsers : (data, callback)=>{
        if(db){
        
            let sql = `SELECT * FROM users`
            
            db.query(sql, data, (err, results )=>{
                if (err) throw errr;
                callback(results)
            })

        }
    }

}

module.exports = users