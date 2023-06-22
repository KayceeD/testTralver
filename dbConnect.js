const mongoose = require('mongoose')

const dbConnect = async() => {
    const mongo_url = process.env.MONGO_URL
    try {
        await mongoose.connect(mongo_url);
        console.log("connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect