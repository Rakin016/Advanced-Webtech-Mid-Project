var express     = require('express');
var feedbackModel = require('../models/feedback');
var router      = express.Router();


router.get('/', function(req, res){
    
    feedbackModel.getAll(function(results){
        var data={results:results}
        res.render('admin/feedback',data);
    });
});

module.exports = router;