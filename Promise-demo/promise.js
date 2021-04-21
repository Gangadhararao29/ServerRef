function conductingTest(status) {

	const promiseOfTest = promise(resolve,reject)=>{
		if(staus==true){
			setTimeout(()=>{resolve("Test can be conducted and ready")},5000);
		}
		else{
			setTimeout(()=>{
			reject("Test cannot be conducted due to technical error"))},5000)
		}
	}
}

//calling function
conductingTest(false)
.then(result=>{
	console.log(result)
})
.catch(err=>{
	console.error(err)
})