// let product=[]
// module.exports=product

// &---------

const mongoose = require('mongoose');

let productSchema=new mongoose .Schema({
    pname:{
        type:String,
        required:[true,"pname is mandatory"]
    },
    price:{
        type:Number,
        required:[true,"price is mandatory"]
    },
    color:{
        type:String,
        required:[true,"color is mandatory"]
    }
},{timestamps:true})

module.exports=mongoose.model("product",productSchema)