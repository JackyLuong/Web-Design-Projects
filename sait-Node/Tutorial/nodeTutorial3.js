const fs = require("fs");

fs.open("log.txt", "r",(err, file)=>
{
    if(err) throw err;

    var buffer = Buffer.alloc(512);

    //Reads data by writing it into a buffer so that it can be read
    //requires: file, buffer, offset, length,position,callback function
    var bytesRead = fs.read(file, buffer, 0, buffer.length,null,(err,amountRead, buffer) =>
    {
        if(err) throw err;
        console.log("Data read: " + buffer);
    });

    //Close file
    fs.close(file, (err) =>
    {
        if(err) throw err;
    });

    //Deletes file
    fs.unlink("log.txt",(err) =>
    {
        if(err) throw err;
    });
});