var express=require('express');
var router = express.Router();
var userModel=require('../models/user');
var adminModel=require('../models/admin');

router.get('/', function(req, res){
    res.render('admin/staff/staff');
});

module.exports=router;
