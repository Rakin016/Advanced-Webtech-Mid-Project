var express=require('express');
var router = express.Router();
var userModel=require('../models/user');

router.get('/',function (req,res){
    res.render('admin/staff/addStaff');
});

router.post('/',function (req,res){
    console.log(req.body);
    var user={
        username:req.body.username,
        password:req.body.password,
        status:req.body.status
    };
    var userFlag;
    userModel.insert(user,function (result){
        console.log(result);
        if(result){
           res.redirect("/staff");
        }
        else{
            res.send("username taken </br> <a href='/admin/staff/addStaff'>try again</a>");
        }
    });

});



module.exports=router;
