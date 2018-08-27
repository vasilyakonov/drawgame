// Including libraries
var express = require('express');
var app = express();
var server = app.listen(process.env.PORT);
var io = require('socket.io')(server);

// Routing
app.use(express.static('public'));

// Listen for incoming connections from clients
io.sockets.on('connection', function (socket) {
	// Start listening for mouse move events
	socket.on('mousemove', function (data) {
		// This line sends the event (broadcasts it)
		// to everyone except the originating client.
		socket.broadcast.emit('moving', data);
	});
});