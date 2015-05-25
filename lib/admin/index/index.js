
var express = require('express');
var process = require('./process');
var app = module.exports = express();
app.set('views',__dirname);
app.set('view engine','ejs');

app.get('/admin/index',function(req,res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		res.render('index.ejs',{title: 'Hệ thống quản lý - Điện lực phường An Hòa'});
		}
});
app.get('/admin/dieukhoansudung', function(req, res){
	process.getDieuKhoanSuDung(req, function(data){
		res.render('dieukhoansudung.ejs', {data: data});
	});
});