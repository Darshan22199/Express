const express = require('express');
const {adduser,
        validateuser} = require('../controller/user.controller');

let router=express.Router()


router.post("/adduser", adduser)
router.post("/validateuser", validateuser)




module.exports=router