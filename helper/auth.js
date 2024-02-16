const jwt = require('jsonwebtoken');

let decodedData
let auth=async (req,res,next)=>{
    try{
        let authToken=req.headers.authorization
    if(!authToken || !authToken.startsWith("Bearer")){
        return res.status(401).json({error:true,message:"token requird"})
    }
    let token=authToken.split(" ")[1]
    decodedData=jwt.verify(token,"dp123")
    console.log(decodedData);
    req.uname=decodedData.uname
    next()
    }
    catch(err){
        next(err)
    }
}

module.exports=auth
