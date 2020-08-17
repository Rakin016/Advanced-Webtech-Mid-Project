$(document).ready(function () {
    loadPost();

    $(document).on('click','.btnComment',function (){
        var id = $(this).val();
        //alert(id);
        loadComment(id);
    });

    function loadPost(){
        var html='';
        var date;
        var options = {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric',
            hour12: true,
            timeZone: 'Asia/Dhaka'
        };
        $.get('/forum/post',function (post,status){
            var data=post;
            //console.log(JSON.stringify(data));
            console.log(data);
            for(var i=0; i<data.length;i++){
                date = new Date(data[i].date);
                data[i].date=new Intl.DateTimeFormat('en-US',options).format(date);
                //console.log(data[i].date);
                html=$("#content").html();
                //console.log(html);
                html+="<div class='card mt-2'>" +
                    "<div class='card-header bg-secondary text-white'>" +
                    "<div class='row'>" +
                    "<div class='col-5 offset-1'>" +
                    "<strong>"+data[i].username+"</strong> posted in forum" +
                    "</div>" +
                    "<div class='col-5 text-right'>" +data[i].date+
                    "</div>" +
                    "</div>" +
                    "</div>" +
                    "<div class='card-body'><div class='row'><div class='col-10 offset-1'> " + data[i].post+
                    "</div></div></div>" +
                    "<div class='card-footer'>";
                //console.log(html);

                    html+="<div class='row'>" +
                        "<div class='col-10 offset-1'>" +
                        "<button class='btn btn-link text-info text-decoration-none btnComment ' id='"+data[i].f_id+"' value='"+data[i].f_id+"'>" +
                        "Comments" +
                        "</button>" +
                        "</div> " +
                        "</div>" +
                        "<form method='post' action='/forum/post/"+data[i].f_id+"/comment' >" +
                        "<div class='row'>" +
                        "<div class='col-9 offset-1'>" +
                        "<input type='text' placeholder='Comment' required name='comment' class='form-control'>" +
                        "</div>" +
                        "<div class='col-1'><input type='submit' class='btn btn-primary'  value='Done'></div> " +
                        "</div></form>" +
                        "</div></div>";
                    $("#content").html(html);


            }
        });
    }

    function loadComment(id){
        var options = {
            year: 'numeric', month: 'numeric', day: 'numeric',
            hour: 'numeric', minute: 'numeric',
            hour12: true,
            timeZone: 'Asia/Dhaka'
        };
        $.get('/forum/post/'+id+'/comment',function (comments,status){
            var html='';
            for(var j=0; j<comments.length;j++){
                var date= new Date(comments[j].date);
                comments[j].date=new Intl.DateTimeFormat('en-US',options).format(date);
                html+="<div class='row mt-1'>" +
                    "<div class='col-5 offset-1'>" +
                    "<strong>" +comments[j].username+
                    "</strong>" +
                    "</div>" +
                    "<div class='col-5 text-right'>" +comments[j].date+
                    "</div> " +
                    "<div class='row'>" +
                    "<div class='col-8 offset-2' >" + comments[j].comment+
                    "</div>"+
                    "</div>" +
                    "</div>";
            }
            html+="<form method='post' action='/forum/post/"+id+"/comment' >" +
                "<div class='row p-2'>" +
                "<div class='col-8 offset-1'>" +
                "<input type='text' placeholder='Comment' required name='comment' class='form-control'>" +
                "</div>" +
                "<div class='col-1'><input type='submit' class='btn btn-primary'  value='Done'></div> " +
                "</div></form>"
            $("#commentBody").html(html);
            $('#commentModal').modal('show');

        });
    }

});
