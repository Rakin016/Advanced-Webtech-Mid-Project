var express 	= require('express');
var exSession 	= require('express-session');
var bodyParser 	= require('body-parser');
var admin  = require('./controllers/admin');
var staff= require('./controllers/staff');
var addStaff= require('./controllers/addStaff');
var payment= require('./controllers/payment');
var availablePayment= require('./controllers/availablePayment');
var addSubPlan= require('./controllers/addSubPlan');
var doctorList= require('./controllers/doctorList');
var userList= require('./controllers/userList');
var staffList= require('./controllers/staffList');
var forum =require('./controllers/forum');
var feedback =require('./controllers/feedback');
var login = require('./controllers/login');
var logout =require('./controllers/logout');
var coockieParser=require('cookie-parser');
var app 		= express();



//config
app.set('view engine', 'ejs');




//middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(exSession({secret: 'my secret value', saveUninitialized: true, resave: false}));
app.use(coockieParser());

app.use('/assets', express.static('assets'));
app.use('/bootstrap/css', express.static('node_modules/bootstrap/dist/css'));
app.use('/bootstrap/js', express.static('node_modules/bootstrap/dist/js'));
app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/popper',express.static('node_modules/popper.js/dist'));
app.use('/img',express.static('assets/img'));
app.use('/files',express.static('assets/files'));
app.use('/css',express.static('assets/css'));
app.use('/js',express.static('assets/js'));


app.use('/logout',logout);
app.use('/staff',staff);
app.use('/addStaff',addStaff);
app.use('/payment',payment);
app.use('/availablePayment',availablePayment);
app.use('/addSubPlan',addSubPlan);
app.use('/doctorList',doctorList);
app.use('/userList',userList);
app.use('/staffList',staffList);
app.use('/forum',forum);
app.use('/feedback',feedback);
app.use('/login',login);
app.use('/admin',admin);

app.get('/', function(req, res){
    res.redirect('/login');
});

app.listen(3000, function(){
    console.log('express http server started at...3000');
});
