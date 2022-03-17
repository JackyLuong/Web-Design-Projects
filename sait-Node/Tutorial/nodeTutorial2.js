const fs = require("fs");
fs.appendFile("log.txt", "This is a log message\r\n",(err)=>
{
    if(err) throw err;
    console.log("Append successfully");
});