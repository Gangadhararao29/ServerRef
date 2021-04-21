const exp=require("express")
const userApiObject=exp.Router();

userApiObject.get("/getuser",(req,res)=>
{
	//res.send({message:"res from user api"}) 
	let userCollObj=req.app.get("userCollObj");
	
	userCollObj.find().toArray((err,usersArray)=>{
		if(err){
			console.log("Error while reading the all users ",err)
		}
		else{
			res.send({message:usersArray})
		}
	})
	
})

/*
// using promises
 userApiObject.get("/getusers",(req,res)=>{
	 
	 let userCollObj=req.app.get('userCollObj')
	 
	 userCollObj.find().toArray()
	 .then(userArray=>{
		 res.send({message:userArray})
	 })
 
 .catch(err=>{
	 console.log('err in reading users',err)
 })
 
 
 })
*/
/*

// using async and await
const userApiObject = exp.Router();

userApiObject.get("/getusers" async (req,res)=>{
	let userCollObj = req.app.get("userCollObj")
	let userArray = await userCollObj.find().toArray()
	res.send({message:userArray})
})

*/



userApiObject.get('/getuser/:id',(req,res)=>{
	
	// console.log(req.params); //for testing purpose only
	// console.log(req.params.name);
	// console.log(req.params.id);
	
	let userCollObj=req.app.get("userCollObj");
	
	userCollObj.findOne({id:req.params.id},(err,userObj)=>{
			if(err){
				console.log("err in reading user", err);
			}
			else {
				res.send({message:userObj})
			}
		})
	
	
})

userApiObject.post('/createuser',(req,res)=>{

	let userCollObj =req.app.get("userCollObj");

	userCollObj.insertOne(req.body, (err)=>{
		if(err){
			res.send("Error Creating the data",err);
		}
		else {
			res.send({message:`New user created`});
		}
	})
})

userApiObject.put("/updateuser/:id", (req,res)=>{
	let userCollObj = req.app.get("userCollObj");

	userCollObj.updateOne({'id':req.params.id},{$set:req.body},(err)=>{
		if(err){
			res.send({message: "Error encounter while Updating the user"});
		}
		else {
			res.send({message: "User information updated succesfully"});
		}
	})
})


userApiObject.delete("/deleteuser/:id",(req,res)=>{
	let userCollObj = req.app.get("userCollObj");

	userCollObj.deleteOne({"id":req.params.id},(err)=>{
		if(err){
			res.send({message:"Error encountered while deleting the user"})
		}
		else{
			res.send({message:"User Deleted Successfully"})
		}
	})
})



module.exports=userApiObject;