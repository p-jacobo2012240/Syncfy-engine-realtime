import mysql from 'mysql'


let params = {
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'dvdemo', 
    port            :  3306 
}
   
let cnn = mysql.createPool(params)    

export default cnn
