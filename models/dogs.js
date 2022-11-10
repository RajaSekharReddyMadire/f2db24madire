const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({ 
 dogName:String,
 dogType: String, 
 price: Number
 
}) 
 
module.exports = mongoose.model("Dog", 
dogSchema) 