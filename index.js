var chatapp = require('express')();
var http = require('http').Server(chatapp);
var io = require('socket.io')(http);

chatapp.get('/chat', function(req, res){
  res.sendfile('chat.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});