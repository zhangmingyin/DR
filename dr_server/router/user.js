const express=require("express");
var router=express.Router();
router.get("/login",(req,res)=>{
    var uname=req.query.uname;
    var upwd=req.query.upwd;
});

module.exports=router;
