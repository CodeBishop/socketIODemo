const express = require('express');
const socketio = require('socket.io');  // Import socketio.Server

const PORT = 9001

// Construct the Express server.
const expressApplication = express()
expressApplication.use(express.static(__dirname + '/public'))
const expressServer = expressApplication.listen(PORT)

// Construct the SocketIO server.
const io = socketio(expressServer)
console.log("Listening to port " + PORT)

// Add event handler for connection events.
io.on('connect', (socket) => {
  socket.emit('messageFromServer', {data: "Welcome to the socketio server"})
  socket.on('messageToServer', (dataFromClient) => {
    console.log(dataFromClient);
  })

  // Listen for messages from clients.
  socket.on('newMessageToServer', (msg) => {
    console.log('Chat message received:\n    ' + msg.text);
    // Forward chat message to all clients.
    io.emit('messageToClients', {text: msg.text})
  })
})
