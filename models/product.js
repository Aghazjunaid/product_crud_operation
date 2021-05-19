var mongoose=require("mongoose");
var Schema=mongoose.Schema;

var ProductSchema= new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String }
},{ timestamps:true });

Product = mongoose.model("product", ProductSchema);

module.exports={  
    Product
}