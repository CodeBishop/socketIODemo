const http = require('http');
const socketio = require('socket.io');

const httpServer = http.createServer((req, res) => {
  res.end("Browse localhost:9000 to see this string")
})

// Setup socketio to listen to httpServer listening to http.
const io = socketio(httpServer)

io.on('connection', (socket, req) => {
  socket.emit('my custom event type for welcoming', 'Run the server then open basics.html. F12->Console and this string should be in the Message.')

  socket.on('my other custom event type', (msg) => {
    console.log(msg);
  })
})

httpServer.listen(9000)