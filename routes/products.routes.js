// const express = require('express');
// const {
//     addProducts,
//     getProducts,
//     getSingleProduct,
//     updateProduct,
//     deleteProduct

// } = require('../controller/products.controller');
// console.log("routes");
// let router=express.Router()

// router.post("/addProducts", addProducts)
// router.get("/getProducts",getProducts)
// router.get("/getProducts/:id",getSingleProduct)
// router.put("/updateProduct/:id",updateProduct)
// router.put("/deleteProduct/:id",deleteProduct)

// module.exports=router

// &-------------------------------
const express = require('express');
const auth = require('../helper/auth');

const {
    addProducts,
    getProducts,
    getSingleProduct,
    updateProduct,
    deleteProduct

} = require('../controller/products.controller');
// console.log("routes");
let router=express.Router()

router.post("/addProducts",auth, addProducts)
router.get("/getProducts",auth,getProducts)
router.get("/getProducts/:id",auth,getSingleProduct)
router.put("/updateProduct/:id",auth,updateProduct)
router.delete("/deleteProduct/:id",auth,deleteProduct)

module.exports=router