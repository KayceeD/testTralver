const productModel = require('../models/productModel');

const getAllproduct = async(req,res)=> {
    const data = await productModel.find();
    console.log(data);
    return res.render("../index", { title: "Trang chủ", tours: data });
}

module.exports = {
    getAllproduct
}