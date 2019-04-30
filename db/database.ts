import mysql from 'promise-mysql'


let params = {
    host: 'localhost',
    user: 'root',
    password: 'developer',
    database: 'metrics'
}
   
let pool = mysql.createPool(params)    

pool.getConnection()
    .then( connection =>{

        pool.releaseConnection(connection)
        console.log(`connected DB`)
    
    }).catch( (err) =>{
        
        console.log(`errors ${err} `)  
    
    })

export default pool
