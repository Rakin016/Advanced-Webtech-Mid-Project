var express=require('express');
var router = express.Router();
var subPlanModel=require('../models/subPlan');

router.get('/',function (req,res){
    res.render('admin/payment/addSubPlan');
});

router.post('/',function (req,res){
    console.log(req.body);
    var subPlan={
        name:req.body.name,
        duration:req.body.duration,
        features:req.body.features,
        price:req.body.price,
    };
    var subPlanFlag;
    subPlanModel.insert(subPlan,function (result){
        console.log(result);
        if(result){
           res.redirect("/payment");
        }
        else{
            res.send("username taken </br> <a href='/admin/payment/addSubPlan'>try again</a>");
        }
    });

});



module.exports=router;
