var net = require('net');
var server = net.createServer(function (socket) {
      socket.write('Echo server\r\n');
      socket.on('data', function (data) {
          if (data == 'exit\n') {
              socket.close();
          }
          socket.write('You said: ' + data);
      });
});
server.listen(1337);
