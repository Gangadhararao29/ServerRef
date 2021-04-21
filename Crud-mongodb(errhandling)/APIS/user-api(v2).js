const exp = require("express");
const userApiObj = exp.Router();

//http://localhost:3000/user/getuser

userApiObj.get("/getuser",async (req,res)=>{
	//get user collection object
	userCollObj = req.app.get("userCollObj");
	let users = await userCollObj.find().toArray()
	res.send({message:userArray})
})

userApiObj.get("/getuser/:id", async(req,res)=>{
	userCollObj = req.app.get("userCollObj")
	let user = await userCollObj.findOne({id:req.params.id})
	res.send({message:user})
})

userApiObj.get("/createuser", async(req,res)=>{
	userCollObj = req.app.get("userCollObj")
	//get user obj from client
	let userObj = req.body;
	//search for user in db with username of client obj
	let userObjFromDb = await userCollObj.findOne({username:userObj.username})
	
	if(userObjFromDb != null){
		res.send({message:user already existed})
	} 
	else{
		//hash ur password
		let result=await userCollObj.insertOne(userObj)
		res.send({message:"user created"})
	}