// const express = require('express');
// const productRoutes = require('./routes/products.routes');
// let app=express()
// app.use(express.json())
// app.use("/api/products",productRoutes)
// app.listen(4000,()=>{console.log("sever is running");})


// &  crud operation using mongoose
const express = require('express');
const connectToMongoDb = require('./db/connection');
const productRoutes = require('./routes/products.routes');
const userRoutes = require('./routes/user.routes');
// const jwt = require('jsonwebtoken');

require('dotenv').config()

let app=express()
app.use(express.json())
app.use('/api/products',productRoutes)
app.use('/api/user',userRoutes)


// ! page not found middle error (called when api path is error)
app.all("*",(req,res)=>{
    res.status(404).json({error:true,message:"page not found"})
})

// !server side (will be called when controller cath block is executed)
app.all((err,req,res,next)=>{
    if(err.statuscode){
        res.status(err.status).json({error:true,message:"invalid user"})
    }
})

let startServer=async()=>{
    try{
        app.listen(process.env.DEV_PORT, ()=>{
            console.log(`server is runnig on port ${process.env.DEV_PORT}`);
        })
        await connectToMongoDb(process.env.DEV_MONGO_URL)
        console.log("mongodb connected");
    }
    catch(err){
        console.log(err);
    }
}
startServer()