const http = require("http");
const fs = require("fs");
const url = require("url");
// Create HTTP server and listen on port 8000 for requests
http.createServer((request, response) => {
  
  var parsedAddress = url.parse(request.url, true);
  var file = "." + parsedAddress.pathname;
  
  if(parsedAddress.path ==="/favicon.ico")
  {
      fs.readFile(file, (err, data) => {
        if(err) throw err;
      response.writeHead(200, { "Content-Type": "img/favicon.ico" });
      response.write(data);
     response.end();
    });
  }
  else
  {
    fs.readFile(file, (err, data) => {
      if(err)
      {
        fs.readFile("404.html", (err, data) => {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        });
      }
      response.writeHead(200, { "Content-Type": "text/plain" });
      response.write(data);
      response.end();
    });
  }
}).listen(8090, () => {console.log("server running...");});
