const mongoose=require("mongoose");


const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://FebinDemo:AbCd1234@namastenodejs.7dfhtlt.mongodb.net/devTinder")
}
module.exports = connectDB;


