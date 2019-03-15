var app       =     require("express")();
var mysql     =     require("mysql");
var http      =     require('http').Server(app);
var io        =     require("socket.io")(http);

/* Creating POOL MySQL connection.*/

var pool    =    mysql.createPool({
      connectionLimit   :   100,
      host              :   'localhost',
      user              :   'root',
      password          :   '',
      database          :   'kinal'
});

app.get("/",function(req,res){
    res.sendFile(__dirname + '/index.html');
});


io.on('connection',function(socket){  
    console.log("Client Connected")

    socket.on('status added',function(status){
      
        add_status(status,function(res){
        if(res){
            io.emit('refresh feed',status);
        } else {
            io.emit('error');
        }
      })
       
    })
})

var add_status = function (status,callback) {
    pool.getConnection(function(err,connection){
        if (err) {
          callback(false);
          return;
        }
    connection.query("INSERT INTO `status` (`s_text`) VALUES ('"+status+"')",function(err,rows){  //Cambiar por select
            connection.release();
            if(!err) {
              callback(true);
            }
        });
     connection.on('error', function(err) {
              callback(false);
              return;
        });
    });
}

http.listen(9876,function(){
    console.log("Listening on 3000");
});