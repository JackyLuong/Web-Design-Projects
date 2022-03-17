const express = require("express");
app = express();
app.listen(8000, ()=>{console.log("Server running on 8000...");});
app.use(express.urlencoded({extended: true}));
app.use(express.static("assets",{"extensions":["jpg","png"]}));
app.set("view engine", "ejs");

var travelDescs = [{desc: "This is the main pyramid at Chichen Itza in Yucatan, Mexico"},
{desc: "A view of CN Tower in Toronto, Ontario, Canada"},
{desc: "Alcatraz Island seen from the tour boat"}];

app.use("/",(req,res)=>
{
    res.render("index", {descs: travelDescs})
});