const express = require("express");
const fs = require("fs");
const mysql = require("mysql");
const app = express();

app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs");

app.listen(8000, (err)=>
{
    if(err) throw err;
    console.log("server started");
});

/*
app.get("/getCustomer", (req,res)=>
{
    var conn = getConnection();
    conn.connect((err) =>
    {
        if(err) throw err;
        var sql = "select * from customers";
        conn.query(sql, (err, result, fields)=>
        {
            if(err) throw err;
            console.log(result);

            fs.readFile("header.html",(err, header)=>
            {
                if(err) throw err;
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(header);

                res.write("<table border = '1'>");
                res.write("<tr>");
                for(let field of fields)
                {
                    res.write("<td>" + field.name + "/<td>");
                }
                for(customer of result)
                {
                    res.write("<tr>");
                    for(let key in customer)
                    {
                        if (customer.hasOwnProperty(key)) {
                            res.write("<td>" + customer[key] + "</td>");
                        }    
                    }
                    res.write("</tr>");
                }
                res.write("</table>");
            });
        });
    });
});
*/

app.get("/index", (req,res)=>
{
    var conn = getConnection();
    conn.connect((err) =>
    {
        if(err) throw err;
        var sql = "select * from customers";
        conn.query(sql, (err, results, fields)=>
        {
            if(err) throw err;
            res.render("index.ejs", {result:results});
            conn.end((err)=>
            {
                if(err) throw err;
            });
        });
    });
});

var getConnection = ()=>
{
    return mysql.createConnection(
    {
        host:"localhost",
        user:"jacky",
        password:"sebastion55",
        database:"travelexperts"
    });
};


