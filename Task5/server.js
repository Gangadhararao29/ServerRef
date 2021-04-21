const express = require("express")
const app = express();

const axios = require("axios")
const exhbs = require("express-handlebars")

//config of handle bars
app.engine('handlebars', exhbs());
app.set('view engine', 'handlebars');

const urlemployees = "http://dummy.restapiexample.com/api/v1/employees"

app.get("/", async (req, res) => {
	try{
		let recievedData = await axios.get(urlemployees);
		let dataFromUrl = recievedData.data;
		res.render('empdata', {employeesdata:dataFromUrl})
	}
	catch(err){
		res.send(err)
	}
})

app.listen("5000", () => { console.log("server started on port 5000") })
 