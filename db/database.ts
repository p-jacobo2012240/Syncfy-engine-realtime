import mysql from 'promise-mysql'


let params = {
    host: '127.0.0.1',
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
