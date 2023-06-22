const express = require('express')
const halongRoute = express.Router();

const fakeData = require("../fakedata/fakeToursdata.json");

halongRoute.get('/',(req,res)=>{
    res.render('../pages/tour-ha-long',{title:"Đặt Tour hạ long",data:fakeData});
})


module.exports = halongRoute