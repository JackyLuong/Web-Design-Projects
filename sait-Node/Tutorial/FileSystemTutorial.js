const builtin = require('module').builtinModules;

//Load HTTP module
const http = require('http');

//Load File System module
const fs = require('fs');

//Create HTTP server and listen on port 8000 for requests.
http.createServer((request, response) => 
{
    fs.readFile("HTMLClassTutorial_v2.html", (err,data) =>
    {
        response.writeHead(200,{"Content-type": "text/html"});
        response.write(data);
        response.end();
    });
}).listen(8000, ( ()=>
    {
        console.log("Runing on port 8000...");
    }));