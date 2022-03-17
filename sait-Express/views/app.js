const express = require("express");
const app = express();

app.listen(8000, ()=> console.log("Server started in port 8000."));

app.use(express.static("views",{"extensions": ["html"]}));

app.use(express.urlencoded({"extended" : true}));

app.get("/",(req,res) =>
{
    res.sendFile("index.html");
});

app.post("/create-post", (req, res) =>
{
    console.log(req.body.blogpost);
    res.redirect("/thanks")
});

app.use((req,res,next) =>
{
    res.status(404).sendFile(__dirname + "/views/404.html");
})