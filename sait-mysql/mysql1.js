const mysql = require ("mysql");

const con = mysql.createConnection(
    {host:"localhost", user:"jacky", 
    password:"sebastion55",
    database:"travelexperts"});

con.connect((err)=>
{
    /*
    if(err) throw err;
    con.query("select AgtFirstName, AgtLastName from agents where AgentId = 5", (err, result, fields) =>
    {
        if(err) throw err;
        console.log(fields);
        console.log(result);
        con.end((err)=>
        {
            if(err) throw err;
        });
    });*/

    if(err) throw err;
    con.query("select agents.AgtFirstName, agents.AgtLastName, agencies.AgncyAddress from agents join agencies on agents.AgencyId = agencies.AgencyId", (err, result, fields) =>
    {
        if(err) throw err;
        console.log(result);
        con.end((err)=>
        {
            if(err) throw err;
        });
    });
})