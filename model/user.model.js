const mongoose = require('mongoose');

let userSchema=new mongoose.Schema({
    uname:{
        type:String,
        required:[true,"name is mandatory"]
    },
    mobile:{
        type:Number,
        required:[true,"mobile no is mandatory"]
        
    },
    email:{
        type:String,
        required:[true,"email is mandatory"]
    },
    password:{
        type:String,
        required:[true,"password is mandatory"],
        min:[5]
    }
},{timestamps:true})

module.exports=mongoose.model("user",userSchema)