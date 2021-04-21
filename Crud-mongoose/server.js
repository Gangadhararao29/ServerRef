
const bodyParser = require("body-parser");
const express = require("express")
const app = express();
const bodyparser = require("body-parser")
require("dotenv").config();

const mongoose =require("mongoose")
mongoose.connect(process.env.dburl,{useNewUrlParser:true, useUnifiedTopology:true})
const db = mongoose.connection;
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyparser.json())

const productApiObj = require("./APIS/product-api")
app.use("/product",productApiObj)

db.on('error',()=>console.log("error connecting db"))
db.once("open",()=>console.log("Connected to Db"))






const port = process.env.PORT;
app.listen(port,()=>{
    console.log("the server started at port "+port)
})
