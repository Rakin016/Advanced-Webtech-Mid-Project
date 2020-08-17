var express     = require('express');
var availablePaymentModel = require('../models/availablePayment');
var router      = express.Router();


router.get('/', function(req, res){
    
    availablePaymentModel.getAll(function(results){
        var data={results:results}
        res.render('admin/payment/availablePayment',data);
    });
});

module.exports = router;