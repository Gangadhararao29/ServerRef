const exp = require("express")
const app=exp();
const bodyParser = require('body-parser')
const mc = require("mongodb").MongoClient;
const userApiObject = require("./APIS/user-api")
const adminApiObject = require("./APIS/admin-api")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/user",userApiObject)
app.use("/admin",adminApiObject)

const dburl ="mongodb+srv://Gangadhar:1450@cluster0.qc0sv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mc.connect(dburl, {useNewUrlParser:true, useUnifiedTopology:true},(err,client)=>{
	if(err){
		console.log("err in db connect",err)
	}
	else{
		const databaseobj=client.db("cdb35db")
		const userCollObj=databaseobj.collection("usercollection")
		app.set("userCollObj",userCollObj)
		console.log("Connected to DB")
	}
})

app.listen(3000,()=>{console.log("Server created on port 3000")})