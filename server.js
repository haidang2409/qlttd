var express = require('express');
var app = module.exports = express();
var http = require('http');
var mysql = require('mysql');

var connection  = require('express-myconnection');

/*----------------------------------
	Setup main environments
------------------------------------*/
app.set('port',process.env.OPENSHIFT_NODEJS_PORT || 8080);

app.use(express.logger('dev'));
app.set('views',__dirname);
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/ckeditor'));// set this for static load assests
app.set('view engine','ejs');
app.use(function (req, res, next) {
	//console.log('Time: %d', Date.now());
	next();
	});
app.configure(function () {
	app.use(express.bodyParser());
	});
/*------------------------------------------
    connection peer, register as middleware
    type koneksi : single,pool and request 
-------------------------------------------*/

app.use(
	connection(mysql,{
		host: '12345600a4382ec97a10000f7-qlttd-haidang.rhcloud.com',
		user: 'admint7T8SY4',
		password : 'luNYiUrtkk4R',
		port : 44331, //port mysql
		database:'qlttd3'
		},'request')
);

/*-----------------------------------
    Set routes and middleware
-----------------------------------*/

//this is how to get the current url, it would be useful in future

function setCurrentUrl(req, res, next) {
	app.set('CURR_URL', req.protocol + '://' + req.get('host') + req.originalUrl);
	next();
}

app.use(setCurrentUrl);

//need to be Above app.router
app.use(express.cookieParser('codetrash.com, very secret ssssstttt'));
app.use(express.session());
app.use(express.cookieParser());
app.use(function(req,res,next){
	res.locals.session = req.session;
	next();
});
/*----------------------------------------------------------
Every lib/module folder created, need to be registered here
------------------------------------------------------------*/
//var loginadmin = require('./lib/admin/login');
var loginuser = require('./lib/user/login');
var e = require('./lib/e');
var loginadmin = require('./lib/admin/login');
var khachhang = require('./lib/admin/khachhang');
var phongban = require('./lib/admin/phongban');
var nhanvien = require('./lib/admin/nhanvien');
var index = require('./lib/admin/index');
var hoadon = require('./lib/admin/hoadon');
var tintuc = require('./lib/admin/tintuc');
var mdsd = require('./lib/admin/mucdichsudung');
var nhommdsd = require('./lib/admin/nhommdsd');
var congtodien = require('./lib/admin/congtodien');
var lib = require('./lib/admin/lib');
var giadien = require('./lib/admin/giadien');
var nhapsolieu = require('./lib/admin/nhapsolieu');
var thongke = require('./lib/admin/thongke');
var trambienap = require('./lib/admin/trambienap');
var quyensudung = require('./lib/admin/quyensudung');
var hdsd_admin = require('./lib/admin/huongdansudung');
//
var nhapsolieu_user = require('./lib/user/nhapsolieu');
var hoadon_user = require('./lib/user/hoadon');
var tintuc_user = require('./lib/user/tintuc');
var thongtin_user = require('./lib/user/thongtin');
var ykienphanhoi_user = require('./lib/user/ykienphanhoi');
var hdsd_user = require('./lib/user/huongdansudung');
app.use(express.json());
app.use(express.urlencoded());
app.use(lib);
app.use(e);
app.use(loginuser);
app.use(loginadmin);
app.use(khachhang);
app.use(phongban);
app.use(nhanvien);
app.use(index);
app.use(tintuc);
app.use(mdsd);
app.use(nhommdsd);
app.use(tintuc_user);
app.use(thongtin_user);
app.use(nhapsolieu_user);
app.use(hoadon_user);
app.use(ykienphanhoi_user);
app.use(hdsd_user);
app.use(congtodien);
app.use(hoadon);
app.use(giadien);
app.use(nhapsolieu);
app.use(thongke);
app.use(trambienap);
app.use(quyensudung);
app.use(hdsd_admin);
/*---------------------------------------------
Let's handle some Errors
----------------------------------------------*/
app.use(function(req,res,fn){
	res.render('Lỗi',{status:404,url:req.url,error:'Lỗi ! Trang không được tìm thấy'});
});

app.use(function(err, req, res, next){
	res.render('error_page', {
		status: err.status || 500
		, error: err
		});
});


/*Create server*/
http.createServer(app).listen(app.get('port'),function(){
	console.log('Listening port : %s ', app.get('port'));
});




