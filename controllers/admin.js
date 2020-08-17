var express=require('express');
var router = express.Router();
var adminModel=require('../models/admin');
var userModel=require('../models/user');

router.get('/',function (req,res){
    if(req.session.user_id!=null){
        adminModel.get(req.session.user_id,function (results){
            console.log(results);
            adminModel.get(req.session.user_id, function (result){
                console.log(result);
                req.session.adminId=result[0].a_id;
                console.log(req.session.adminId);
                result[0].username=req.session.username;
                result[0].amount=results.ammount;
                console.log(result);
                res.render('admin/index',result[0]);
            });

        });

    }
    else {
        res.redirect('/login');
    }
});

router.post('/', function (req,res){
    res.send("Under construction");
});

router.get('/addStaff',function (req,res){
    if(req.session.username!=null){
        adminModel.get(req.session.user_id,function (result){
            var admin=result[0];
            admin.username=req.session.username;
            admin.password=req.session.password;
            console.log(admin);

            res.render('/admin/staff/addStaff',admin);
        })
    }
    else {
        res.redirect('/login');
    }
});


module.exports=router;
