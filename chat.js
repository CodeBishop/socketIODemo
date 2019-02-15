const express = require('express');
cosnt socketio = require('socket.io');
const app = express()

app.use(express.static(__dirname + '/public'))

const expressServer = app.listen(9001)
socketio(expressServer)
