console.log('    o  +           +        +');
console.log('+        o     o       +        o');
console.log('-_-_-_-_-_-_-_,-----------------,      o ');
console.log('_-_-_-_-_-_-_-| STARTING 3NITY... /\\_/\\  ');
console.log('-_-_-_-_-_-_-~|____________( ^ .^)  +     +  ');
console.log('_-_-_-_-_-_-_-""            ""      ');
console.log('+      o         o   +       o');
console.log('    +         +');
console.log('o        o         o      o     +\n');

/*
@================================================================================
@= MAIN APP
@================================================================================
*/
var express = require('express')
    , http = require('http');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

server.listen(2015);
console.log('Server running on the port 2015');
console.log("Open http://localhost:2015 on the browser!!!")
app.use(express.static(__dirname + '/'));


io.sockets.on('connection', function(socket){
  socket.on('Send message', function(data){
    io.sockets.emit('New message',data);
    //socket.broadcast.emit('New message',data);
  });
});