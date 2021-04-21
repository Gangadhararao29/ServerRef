const express =require('express')
const productModel = require('../models/product-model')

const productApiObj = express.Router();


productApiObj.get('/getproducts',async(req, res)=>{
    const product = await productModel.find()

    try {
        res.send({Products_List:product});
      } 
	catch (err) {
        res.status(500).send(err);
      }
})

productApiObj.post('/createproduct', async (req, res) => {

  const prevData = await productModel.findOne({"Id": (req.body.Id *1)})
  if(!prevData){
    const product = new productModel(req.body);

  try {
    await product.save();
    res.send({message:"New Product Added ", product});
  } catch (err) {
    res.status(500).send(err);
  }
}
else{
  res.status(200).send({message:"Product Id already exists"})
}
  });

  productApiObj.delete('/getproduct/:Id', async (req, res) => {
    try {
      const product = await productModel.deleteOne({"Id":(req.params.Id * 1)})
      if (!product) res.status(404).send("No item found")
      res.status(200).send({message:"Product deleted successfully", product});
    } catch (err) {
      res.status(500).send(err)
    }
  })

  productApiObj.patch('/getproduct/:Id', async (req, res) => {
    try {
      const product = await productModel.updateOne({Id:req.params.Id*1},{Name:req.body.Name, Price:req.body.Price, Brand:req.body.Brand})
      await productModel.save()
      res.status(200).send(product)
    }
     catch (err) {
      res.status(500).send(err)
    }
  })

module.exports = productApiObj;