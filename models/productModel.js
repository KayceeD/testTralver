const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  MaTour: Number,
  TenTour: String,
  Gia: String,
  Anh: String,
  description:String
},{
    collection:'products'
});

module.exports = mongoose.model('products',productSchema)
