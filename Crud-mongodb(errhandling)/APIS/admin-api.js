const exp=require("express")
const adminApiObject=exp.Router();

adminApiObject.get("/getadmins",(req,res)=>{ 
	res.send({message:"res from admin api"})
})



module.exports=adminApiObject;