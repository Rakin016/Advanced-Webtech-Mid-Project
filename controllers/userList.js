var express     = require('express');
var userListModel = require('../models/userList');
var patientListModel = require('../models/patientList');
var router      = express.Router();


router.get('/', function(req, res){
    
    userListModel.getAll(function(results){
        var data={results:results}
        res.render('admin/userList/userList',data);
    });
});

router.get('/delete/:id', function(req, res){
	
	userListModel.get(req.params.id, function(result){
		res.render('admin/userList/delete', {user: result});
	});
	
});

router.post('/delete/:id', function(req, res){

	userListModel.delete(req.body.id, function(status){
		if(status){
			res.redirect('/userList');
		}else{
			res.redirect('/userList');
		}
	});
});

router.get('/get/:id', function(req, res){
	
	patientListModel.get(req.params.id, function(result){
		console.log(result);
		res.render('admin/userList/details', {user: result});
	});
	
});

router.post('/get/:id', function(req, res){

	patientListModel.get(req.body.id, function(status){
		if(status){
			res.redirect('/userList');
		}else{
			res.redirect('/admin');
		}
	});
});


module.exports = router;