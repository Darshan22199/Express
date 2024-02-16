// const product = require('../model/products.model');

const { json, application } = require("express")


// let addProducts=(req,res)=>{
//         let {pid,pname}=req.body;
//         product.push({pid,pname})
//         res.send("product added successfully")
//     }


// let getProducts=(req,res)=>{
//         res.json({error:false,message:"products fetched successfully",product})
//     }


// let getSingleProduct=(req,res)=>{
//         let{id}=req.params;
//         let singleproduct=product.find(({pid})=>{
//             return pid===Number(id)
//         })
//         if(!singleproduct)
//         {
//             return res.json({error:true,message:`no product found with id ${id}`})
//         }
//         res.json({error:false,message:"products fetched successfully",product})
//     }



// let updateProduct=(res,req)=>{
//         let {id}=req.params
//         let {pname:productName}=req.body
//         let singleproduct=product.find(({pid})=>{
//             return pid===Number(id)
//         })
//         if(!singleproduct)
//         {
//             return res.json({error:true,message:`no product found with id ${id}`})
//         }
//         let updateproduct=product.map(p=>
//             {
//                 if(p.pname===singleproduct.pname){
//                     p.pname=productName
//                 }
//                 return p
//             })
//             product=updateproduct
//             res.json({error:false,message:"product updated successfully",updateproduct:product})
//     }



// let deleteProduct=(req,res)=>{
//     let {id}=req.params
//     let singleproduct=products.find(({pid})=>{
//         return pid===Number(id)
//     })
//     if(!singleproduct)
//     {
//         return res.json({error:true,message:`no product found with id ${id}`})
//     }
//     let filteredProduct=product.filter(p=>{
//         return p.pid!==Number(id)
//     })
//     products.filteredProduct
//     res.json({error:false,message:"product deleted",updateproduct:product})

// }

// module.exports={
//     addProducts,
//     getProducts,
//     getSingleProduct,
//     updateProduct,
//     deleteProduct

// }

// &--------------------
const productCollection = require('../model/products.model');
let  addProducts=async(req,res)=>{
    try{
        let {pname,price,color}=req.body
        let addedProducts= await productCollection.create({pname,price,color})
         res.status(201).json({error:false,message:"product added successfully",data:addedProducts})
    }
    catch(err){
        res.status(404).json({error:true, message:err.message})
    }
}

let getProducts=async(req,res)=>{
    try{
        let allProducts=await productCollection.find({})
        if(allProducts.length===0){
            res.status(201).json({error:false,message:"no product found"})
        }
        res.status(201).json({error:false,message:"product fetched successfully",data:allProducts})

    }
    catch(err){
        res.status(404).json({error:true, message:err.message})
    }
}

let  getSingleProduct=async(req,res)=>{
    try{
        let{id}=req.params;
        let singProduct=await productCollection.find({_id:id})
        res.status(201).json({error:false,message:"product fetched successfully",data:singProduct})
    }
    catch(err){
        res.status(404).json({error:true, message:err.message})
    }
}

let updateProduct=async(req,res)=>{
    try{
        let{id}=req.params;
        let{pname}=req.body
        let upadatedProduct=await productCollection.findByIdAndUpdate({_id:id},{pname},{new:true,runValidators:true})
        if(!upadatedProduct){
            res.status(404).json({error:true, message:"no product found"})
        }
        res.status(201).json({error:false,message:"product updated successfully",data:upadatedProduct})
    }
    catch(err){
        res.status(404).json({error:true, message:err.message})
    }
}
let deleteProduct=async (req,res)=>{
    try{
        let{id}=req.params;
        let deleteProduct=await productCollection.findByIdAndDelete({_id:id})
        if(!deleteProduct)
        {
            res.status(404).json({error:true, message:"no product found"})
        }
        res.status(201).json({error:false,message:"product deleted successfully",data:deleteProduct})
    }
    catch(err){
        res.status(404).json({error:true, message:err.message})
    }
}
module.exports={
    addProducts,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct
}