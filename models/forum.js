var db = require('./db');

module.exports ={

    get: function(id, callback){
        var sql = "select * from forum where f_id="+id+" order by id desc";
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
        var sql = "select * from forum f, users u where f.u_id=u.id order by f.f_id desc";
        db.getResults(sql, function(result){
            if(result.length > 0){
                callback(result);
            }else{
                callback([]);
            }
        });
    },

    insert: function(forum, callback){
        var sql = "insert into forum (date, post, u_id) " +
            "values(CURRENT_TIMESTAMP, '"+forum.post+"', "+forum.u_id+")";

        console.log(sql);

        db.execute(sql, function(status){
            if(status){
                callback(true);
            }else{
                callback(false);
            }
        });
    },

    update: function(forum, callback){
        var sql = "update forum set post='"+forum.post+ "' where f_id="+forum.f_id;
        db.execute(sql, function(status){
            if(status){
                callback(true);
            }else{
                callback(false);
            }
        });
    },

    delete: function(id, callback){
        var sql = "delete from forum where f_id="+id;
        db.execute(sql, function(status){
            if(status){
                callback(true);
            }else{
                callback(false);
            }
        });
    }
}
