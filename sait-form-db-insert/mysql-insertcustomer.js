const mysql = require("mysql");
const express = require("express");
const app = express();
app.listen(8000, (err)=>{
	if (err) throw err;
	console.log("server started on port 8000");
});

//load the body-parser module to convert the data in the request body into an object
const bodyParser = require("body-parser");

var errorMessage;
function verifyData(customer)
{
	errorMessage = "";
	if (customer.CustFirstName == "")
	{
		errorMessage += "CustFirstName must have a value<br />";
	}
	if (customer.CustLastName == "")
	{
		errorMessage += "CustLastName must have a value<br />";
	}
	if (customer.CustAddress == "")
	{
		errorMessage += "CustAddress must have a value<br />";
	}
	if (customer.CustCity == "")
	{
		errorMessage += "CustCity must have a value<br />";
	}
	if (customer.CustProv == "")
	{
		errorMessage += "CustProv must have a value<br />";
	}
	if (customer.CustPostal == "")
	{
		errorMessage += "CustPostal must have a value<br />";
	}
	if (customer.CustCountry == "")
	{
		errorMessage += "CustCountry must have a value<br />";
	}
	if (customer.CustHomePhone == "")
	{
		errorMessage += "CustHomePhone must have a value<br />";
	}
	if (customer.CustBusPhone == "")
	{
		errorMessage += "CustBusPhone must have a value<br />";
	}
	if (customer.CustEmail == "")
	{
		errorMessage += "CustEmail must have a value<br />";
	}
	if (customer.AgentId == "")
	{
		errorMessage += "AgentId must have a value<br />";
	}
	
	//return false if there is an error, true if not
	if (errorMessage)
	{
		return false;
	}
	else
	{
		return true;
	}
}

//convert the request body form data to a JSON object
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/custform", (req, res)=>{
  res.sendFile(__dirname + "/custform.html", function (err) {
    if (err) throw err; // Pass errors to Express.
  });
});

app.post("/newcustomer", (req, res)=>{
	//pass the request body to a verification function, and if it is okay, update the database
	console.log("Body: " + req.body);
	if (verifyData(req.body))
	{
		var conn = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: "",
			database: "travelexperts"
		});
		conn.connect((err)=>{
			if (err) throw err;
			var sql = "INSERT INTO customers (CustFirstName, CustLastName, CustAddress,"
				+ " CustCity, CustProv, CustPostal, CustCountry, CustHomePhone, CustBusPhone, CustEmail, AgentId)"
				+ " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
			conn.query(sql, [req.body.CustFirstName, req.body.CustLastName, req.body.CustAddress,
				req.body.CustCity, req.body.CustProv, req.body.CustPostal, req.body.CustCountry, req.body.CustHomePhone,
				req.body.CustBusPhone, req.body.CustEmail, req.body.AgentId], function (err, result) {
				if (err) throw err;
				console.log(result.affectedRows + " record(s) inserted");
				res.send(result.affectedRows + " record(s) inserted");
				conn.end(function(err) {
					if (err) throw err;
				});
			});
		});
	}
	else
	{
		//return an error message
		res.send(errorMessage);
	}
	
});