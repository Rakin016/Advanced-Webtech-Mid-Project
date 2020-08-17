var db = require('./db');

module.exports ={

    get: function(id, callback){
        var sql = "select * from doctor where d_id="+id;
        db.getResults(sql, function(result){
            if(result.length > 0){
                console.log(result[0]);
                callback(result[0]);
            }else{
                callback([]);
            }
        });
    },
    
    getAll: function(callback){
        var sql = "select * from doctor";
        db.getResults(sql, function(result){
            if(result.length > 0){
                callback(result);
            }else{
                callback([]);
            }
        });
    },

    delete: function(id, callback){
        var sql = "delete from doctor where d_id="+id;
        db.execute(sql, function(status){
            if(status){
                callback(true);
            }else{
                callback(false);
            }
        });
    }

}
