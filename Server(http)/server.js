//import http module
const http=require('http')

//create server
const server=http.createServer((req,res)=>{
	//res.end("This is the response from web server")
	
	if(req.method=="GET"){
		//res.end("this is from the get handler")
		if(req.url== "/getusers"){
			res.end("Data of all users")
		}
		if(req.url== "/getuser"){
			res.end("Data of one user")
		}
	}
	if(req.method=="POST"){
		//res.end ("this is from post handler")
		if(req.url=="/postusers"){
			res.end("Data of the post users")
		}
	}
	if(req.method=="PUT"){
		//res.end("this is from the put handler")
		if(req.url == "/putusers"){
			res.end("Data of put users")
		}
	}
	if(req.method=="DELETE"){
		//res.end ("this is from delete handler")
		if (req.url=="/deleteuser"){
			res.end("Delete the current user")
		}
		if (req.url == "/deleteusers"){
			res.end("All the data of the usersn is deleted")
		}
	}
})

//assign port
server.listen(3125,()=>{console.log("server started at port 3125")})