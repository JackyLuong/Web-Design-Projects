const express = require ("express");
const path = require("path");
const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, "assets"),{"extensions": ["jpg"]}));

app.listen(8000, ()=>{console.log("Server running on port 8000...");});

app.set("views", path.join(__dirname, "views"));
app.set("view engine","pug");

app.get("/", (req, res)=>
{
    res.render("index", {fname: "fred", html:"h2"});
});