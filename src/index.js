const http = require('http');
const path = require('path');

const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Settings
app.set('port', process.env.PORT || 3000);

require('./sockets');


app.use(express.static(path.join(__dirname, 'public')));

server.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})