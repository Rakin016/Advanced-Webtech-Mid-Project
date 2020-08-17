var express=require('express');
var router = express.Router();
var subPlanModel=require('../models/subPlan');
var adminModel=require('../models/admin');

router.get('/', function(req, res){
    res.render('admin/payment/payment');
});

module.exports=router;
