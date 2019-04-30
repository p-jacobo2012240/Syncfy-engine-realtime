import db from '../db/database'

export let Users ={

    getAllUsers : (data : any, callback: any  )=>{
        if(db){
            let sql = `SELECT * FROM users`
            db.query( sql, data, (err, results)=>{
                if(err) throw err
                callback(results)
            })
        }
    }

}
