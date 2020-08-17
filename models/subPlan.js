var db = require('./db');

module.exports ={

    insert: function(subPlan, callback){
        var sql = "insert into subplan (name, duration, features, price) " +
            "values('"+subPlan.name+"', '"+subPlan.duration+"', '"+subPlan.features+"', '"+subPlan.price+"')";

        console.log(sql);

        db.execute(sql, function(status){
            if(status){
                callback(true);
            }else{
                callback(false);
            }
        });
    },
  
}
