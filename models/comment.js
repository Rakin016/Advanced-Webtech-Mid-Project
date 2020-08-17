var db = require('./db');

module.exports ={

    get: function(id, callback){
        var sql = "select * from comment where c_id="+id;
        db.getResults(sql, function(result){
            if(result.length > 0){
                console.log(result[0]);
                callback(result[0]);
            }else{
                callback([]);
            }
        });
    },
    getAll:function(callback){
        var sql = "select * from comment order by f_id";
        db.getResults(sql, function(result){
            if(result.length > 0){
                callback(result);
            }else{
                callback([]);
            }
        });
    },
    getAllofPost: function(f_id,callback){
        var sql = "select * from comment c, users u where c.f_id="+f_id+" and c.u_id=u.id order by c_id desc";
        db.getResults(sql, function(result){
            if(result.length > 0){
                callback(result);
            }else{
                callback([]);
            }
        });
    },

    insert: function(comment, callback){
        var sql = "insert into comment (comment,date, u_id,f_id) " +
            "values('"+comment.comment+"',CURRENT_TIMESTAMP, "+comment.u_id+", "+comment.f_id+")";

        console.log(sql);

        db.execute(sql, function(status){
            if(status){
                callback(true);
            }else{
                callback(false);
            }
        });
    },

    update: function(comment, callback){
        var sql = "update comment set comment='"+comment.comment+ "' where c_id="+comment.c_id;
        db.execute(sql, function(status){
            if(status){
                callback(true);
            }else{
                callback(false);
            }
        });
    },

    delete: function(id, callback){
        var sql = "delete from comment where f_id="+id;
        db.execute(sql, function(status){
            if(status){
                callback(true);
            }else{
                callback(false);
            }
        });
    }
}
