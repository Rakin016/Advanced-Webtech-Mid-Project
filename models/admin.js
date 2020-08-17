var db=require('./db');

module.exports={
    get:function (id, callback){
        var sql="select * from admin where user_id='"+id+"'";
        db.getResults(sql,function (result){
            if(result.length > 0){
                callback(result);
            }else{
                callback([]);
            }
        });
    },
    getAll:function (callback){
        var sql="select * from admin";
        db.getResults(sql,function (result){
            if(result.length > 0){
                callback(result);
            }else{
                callback([]);
            }
        });
    },
}
