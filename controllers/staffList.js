var express     = require('express');
var staffListModel = require('../models/staffList');
var router      = express.Router();


router.get('/', function(req, res){
    
    staffListModel.getAll(function(results){
        var data={results:results}
        res.render('admin/staff/staffList',data);
    });
});

module.exports = router;