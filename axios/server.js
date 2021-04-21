const express = require("express")
const app = express();

const axios = require("axios")
const exhbs = require("express-handlebars")

//config of handle bars
app.engine('handlebars', exhbs());
app.set('view engine', 'handlebars');

const urltodos = "https://jsonplaceholder.typicode.com/todos"
const urlposts = "https://jsonplaceholder.typicode.com/posts"
const urlcomments = "https://jsonplaceholder.typicode.com/comments"
const urlimages = "https://jsonplaceholder.typicode.com/photos"

app.get("/test", (req, res) => {
	res.render('test', {
		testdata: {
			message: "HAI HELLO FROM TEMPLATE",
			greet: "WELCOME TO THE PAGE"
		}
	})
})


app.get("/todos", async (req, res) => {
	let recievedData = await axios.get(urltodos);
	let dataFromUrl = recievedData.data;

	res.render('todos', { todosdata: dataFromUrl })

})


app.get("/posts", async (req, res) => {
	let recievedData = await axios.get(urlposts);
	let dataFromUrl = recievedData.data;

	res.render('posts', { postsdata: dataFromUrl })

})

app.get("/comments", async (req, res) => {
	let recievedData = await axios.get(urlcomments);
	let dataFromUrl = recievedData.data;

	res.render('comments', { commentsdata: dataFromUrl })

})

app.get("/images", async (req, res) => {
	let recievedData = await axios.get(urlimages);
	let dataFromUrl = recievedData.data;

	res.render('images', { imagesdata: dataFromUrl })

})


app.listen("8080", () => { console.log("server started on port 8080") });