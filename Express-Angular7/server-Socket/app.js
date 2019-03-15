let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

//Routes
let userRoute = require('./routes/users')

//CORS-CONFIG
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","POST, GET, PUT, DELETE, OPTIONS"); 
    next();
});


app.use('/api', userRoute )


const port = process.env.PORT || 1234


io.on('connection', (socket) => {
    console.log('Cliente conectado');

    socket.on('new-locations', (message ) => {    //para excuchar
      console.log(message);
      io.emit('new-locations', message);          //para emitir data
    });

    socket.on('realtime', (data)=>{
        console.log('se disparo el socket')
        io.emit('realtime', data )
    })

});

server.listen(port, () => {

    console.log(`
    started on port: ${port}
    `);

});
/*
var mysql = require('mysql')
// Let’s make node/socketio listen on port 3000
var io = require('socket.io').listen(2468)
// Define our db creds
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'sockets'
})
 
// Log any errors connected to the db
db.connect(function(err){
    if (err) console.log(err)
})
 
// Define/initialize our global vars
var notes = []
var isInitNotes = false
var socketCount = 0
 
io.sockets.on('connection', function(socket){
    // Socket has connected, increase socket count
    socketCount++
    // Let all sockets know how many are connected
    io.sockets.emit('users connected', socketCount)
 
    socket.on('disconnect', function() {
        // Decrease the socket count on a disconnect, emit
        socketCount--
        io.sockets.emit('users connected', socketCount)
    })
 
    socket.on('new note', function(data){
        // New note added, push to all sockets and insert into db
        notes.push(data)
        io.sockets.emit('new note', data)
        // Use node's db injection format to filter incoming data
        db.query('INSERT INTO notes (note) VALUES (?)', data.note)
    })
 
    // Check to see if initial query/notes are set
    if (! isInitNotes) {
        // Initial app start, run db query
        db.query('SELECT * FROM notes')
            .on('result', function(data){
                // Push results onto the notes array
                notes.push(data)
            })
            .on('end', function(){
                // Only emit notes after query has been completed
                socket.emit('initial notes', notes)
            })
 
        isInitNotes = true
    } else {
        // Initial notes already exist, send out
        socket.emit('initial notes', (notes)=>{
            console.log(notes)
        })
    }
})*/