const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static("assets",{"extensions" : ["svg","png","jpg"]}));
app.use(express.static("views",{"extensions":["html","htm","css"]}));
app.listen(8000,() =>{console.log("Server Started on port 8000")});

app.get("/", (req,res) =>
{
    console.log(__dirname);
    res.send("Hello World");
});
/*
app.get("/about",(req,res) =>
{
    res.send("About this file: This is our about file");
});
//loads contact page
app.get("/contact",(req,res) =>
{
    res.sendFile(__dirname + "/Contact.html")
});

//loads test page
app.get("/test",(req,res) =>
{
    res.sendFile("/test");
});
*/
//sends file to database
app.post("/register", (req,res) =>
{
    res.send("body fname:" + req.body.fname + "body lname:" + req.body.lname + 
    "body phone:" + req.body.phone + "\nfname: " + req.params.fname + "\nlname:" + "req.query.lname");

});
app.use((req, res, next) =>
{
    console.log("got to the first method call");
    next();
})
app.use((req, res, next) =>
{
    console.log("got to the second method call");
    next();
})
app.use((req, res, next) =>
{
    console.log("got to the third method call");
    next();
});
// displays error
app.use((req, res, next) =>
{
    res.status(404).sendFile(__dirname + "/404.html")

});

/*app.post("/register/:fname/:lname/:phone", (req,res) =>
{
    res.send("fname:" + req.params.fname + "/n lname:" + req.params.lname + 
    "/nphone:" + req.params.phone + "fname:" + req.query.fname + "/n lname:" + req.query.lname + 
    "/nphone:" + req.query.phone);

});*/