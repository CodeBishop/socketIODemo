const express = require('express');
const socketio = require('socket.io');

const PORT = 9001

const app = express()

app.use(express.static(__dirname + '/public'))

const expressServer = app.listen(PORT)

// Call the SocketIO server constructor to expose the server.
const io = socketio(expressServer)
console.log("Listening to port " + PORT)

io.on('connection', (socket) => {
  socket.emit('messageFromServer', {data: "Welcome to the socketio server"})
  socket.on('messageToServer', (dataFromClient) => {
    console.log(dataFromClient);
  })
})
