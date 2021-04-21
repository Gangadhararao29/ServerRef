const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    Id: Number,
    Name:String,
    Price:Number,
    Brand:String
})

const Product = mongoose.model('product',ProductSchema)

module.exports = Product;