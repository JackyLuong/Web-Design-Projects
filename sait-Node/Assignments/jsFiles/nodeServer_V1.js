const http = require("http");
const fs = require("fs");
const url = require("url");
const rndFileName = require("./randomFileName.js");

// Create HTTP server and listen on port 8000 for requests
http.createServer((request, response) => {
  
  //Gets url that is being loaded
  var parsedAddress = url.parse(request.url, true);
  var file = "." + parsedAddress.pathname;
  
  //Reads url to see if there is a favicon at the end of it to add
  if(parsedAddress.path ==="/favicon.ico")
  {
      fs.readFile(file, (err, data) => {
        if(err)
        {
          //directs user to a page that says 404 not found.
          fs.readFile("404.html", (err, data) => {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data);
            response.end();
          });
        }
        else
        {
          //reads and displays a favicon on the tab of the page
          response.writeHead(200, { "Content-Type": "img/favicon.ico" });
          response.write(data);
          response.end();
        }
    });
  }
  //Reads the html pages and loads them in.
  else
  {
    fs.readFile(file, (err, data) => {
      if(err)
      {
        //directs user to a page that says 404 not found.
        fs.readFile("404.html", (err, data) => {
          response.writeHead(200, { "Content-Type": "text/html" });
          response.write(data);
          response.end();
        });
      }
      else
      {
        
        //Reads and writes svg files
        if(file.includes(".svg"))
        {
          response.writeHead(200,{ "Content-Type": "image/svg+xml" });
        }
        //Reads and write css files
        else if(file.includes(".css"))
        {
          response.writeHead(200,{ "Content-Type": "text/css" });
        }
        //Reads and write html files
        else
        {
          response.writeHead(200, { "Content-Type": "text/html" });
        }

        //Display all the files in the folder
        response.write(data);

        //Generates a random filename if it's the homepage
        if(file.includes(".html") && (file != "./404.html" && file != "./AboutPage.html" && file != "./ContactPage.html"))
        {
          console.log(file);
          rndFileName.generateRandomFileName(file);
        }
        response.end();
      }
    });
  }
}).listen(8090, () => {console.log("server running...");});
