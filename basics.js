const http = require('http');
const socketio = require('socket.io');

const httpServer = http.createServer((req, res) => {
  res.end("Browse localhost:9000 to see this string")
})

httpServer.listen(9000)