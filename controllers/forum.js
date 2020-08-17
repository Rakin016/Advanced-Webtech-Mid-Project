var express=require('express');
var router = express.Router();
var userModel=require('../models/user');
var forumModel=require('../models/forum');
var commentModel=require('../models/comment');

router.get('/',function (req,res){
    if(req.session.user_id!=null){
        res.render('admin/forum/index');
    }
});

router.post('/', function (req,res){

});

router.get('/post',function (req,res){
    forumModel.getAll(function (results){
        console.log(results);
        res.send(results);
    });
});

router.post('/post',function (req,res){
    if(req.body.post==''){
        res.redirect('/forum');
    }
    else {
        console.log(req.body);
        var post = {
            post: req.body.post,
            u_id: req.session.user_id
        }
        console.log(post);
        forumModel.insert(post, function (status) {
            res.redirect('/forum');
        });
    }
});

router.get('/post/:id/comment',function (req,res){
    console.log(req.params.id);
    var id=req.params.id;
    commentModel.getAllofPost(id,function (results){
        console.log(results);
        res.send(results);
    });
});
router.post('/post/:id/comment',function (req,res){
    console.log('comment');
    if(req.body.comment==''){
        res.redirect('/forum');
    }
    else {
        console.log(req.body);
        var comment = {
            comment: req.body.comment,
            u_id: req.session.user_id,
            f_id: req.params.id
        }
        console.log(comment);
        commentModel.insert(comment, function (status) {
            res.redirect('/forum');
        });
    }
});



module.exports=router;
