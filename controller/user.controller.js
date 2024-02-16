const usercollection = require('../model/user.model');
const asyncwrapper = require('../helper/helper');
// const jwt = require('jsonwebtoken');
// const customApiError = require('../helper/customapierror');

let  adduser=asyncwrapper(async(req,res,next)=>{
   
    let {uname,mobile,email,password}=req.body
    let isemailavailable=await usercollection.findOne({email})
    if(!isemailavailable){
        let mobileavailable=await usercollection.findOne({mobile})
        if(!mobileavailable){
            let addeduser= await usercollection.create({uname,mobile,email,password})
            res.status(201).json({error:false,message:"user added successfully",data:addeduser})
        }else{
        res.status(404).json({error:true, message:"mobile is already exists"})
        // next(customApiError("mobile is already exist",409))

        }
    }else{
        res.status(404).json({error:true, message:"email is already exists"})
        // next(customApiError("email is already exist",409))


    }
})


let validateuser=asyncwrapper(async(req,res,next)=>{
   
    let {email,password}=req.body
    let userisavailable=await usercollection.findOne({email})
    if(userisavailable){
        console.log(userisavailable);
         if(userisavailable.password===password){
            let token=jwt.sign({uname:userisavailable.uname},"dp123",{expiresIn:"1d"})
            // console.log("true");
          return res.status(200).json({error:false, message:"login successfully",token})

         }
         else{
            res.status(404).json({error:true, message:"wrong password"})
            // next(customApiError("invalid password",401))

         }
    }else{
        res.status(404).json({error:true, message:"user not found"})
        // next(customApiError("mobile is already exist",409))
    }
}
)
module.exports={adduser,
                validateuser}