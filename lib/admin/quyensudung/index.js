var express = require('express');
var app = module.exports = express();
var qsd = require('./quyensudung');
app.set('views',__dirname);
app.set('view engine','ejs');

app.post('/admin/themphanquyen', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		qsd.themphanquyen(req, function(st){
			res.json(st);
		});
		}
});
app.post('/admin/xoaphanquyen', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		var temp = JSON.parse(JSON.stringify(req.body));
		var manv = temp.manhanvien;
		qsd.xoaphanquyen(req, manv, function(st){
			res.json(st);
		});
		}
});