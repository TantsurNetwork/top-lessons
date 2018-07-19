const http =  require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {

      if (request.url === "/style.css") {
          response.end(fs.readFileSync('style.css', 'utf8'));
      }
      else {
          response.end(fs.readFileSync('index.html', 'utf8'));
      }

      console.log('port = ', process.env.port);

      console.log( request.method, request.url );
})

server.listen(process.env.PORT || 3000);
console.log("Server started");