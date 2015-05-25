var express = require('express');
var app = module.exports = express();
var process = require('./process');
app.set('views',__dirname);
app.set('view engine','ejs');
/*
app.get('/',function(req,res){
	if(req.session.username)
		{
			res.redirect('/e');
		}
	else
		{
		if(req.cookies.username && req.cookies.password)
			{
			process.login(req, res, function(status){
			if(status)
				{
				res.json({status: status});
				}
			else
				{
				res.render('login.ejs',{error_login:'', title:'Đăng nhập'});
				}
			//console.log(req.session.username);
			});
			}
		else
			{
				res.render('login.ejs',{error_login:''});
			}
		}
	//console.log(req.cookies.username + req.cooikes.password);
});

app.get('/login',function(req,res){
	if(req.session.username)
		res.redirect('/e');
	res.render('login.ejs',{error_login:(req.session.login_error) ? req.session.login_error : '', title:'Đăng nhập'});
});*/
app.post('/login',function(req,res){
	process.login(req, res, function(status){
		res.json(status);
	});

});
app.get('/logout', function(req,res){
	req.session.destroy(function(){
		res.redirect('/');
	});
});
app.post('/kiemtramatkhaukh',function(req, res){
	process.kiemtramatkhau(req, function(status){
		res.json(status);
	});

});