const builtin = require('module').builtinModules;

//Load HTTP module
const http = require('http');

//Load File System module
const fs = require('fs');

//Create HTTP server and listen on port 8000 for requests.
http.createServer((request, response) => 
{
    //Set the response HTTP to a html type.
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE html><html><head><title>Hello World</title></head><body>");
    //Send the response to write hello world
    response.write("<h1>Hello World</h1>");
    response.write("<p>" + request.url +"</p>");
    
    response.write("</body></html>");
    response.end();
}).listen(8000, ( ()=>
    {
        console.log("Runing on port 8000...");
    }));