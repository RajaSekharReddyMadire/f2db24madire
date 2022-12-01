const mongoose = require("mongoose") 

const dogSchema = mongoose.Schema({ 
 dogName : { type : String, required : true },
 dogType : { type : String, required : true }, 
 price : { type : Number, required : true}
}) 
 
module.exports = mongoose.model("Dog", dogSchema) 