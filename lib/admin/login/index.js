
var express = require('express');
var app = module.exports = express();
var process = require('./process');
app.set('views',__dirname);
app.set('view engine','ejs');

app.get('/admin',function(req,res){
	if(req.session.username_admin)
		{
		res.redirect('/admin/index');
		}
	else
		{
		res.render('login.ejs',{error_login:''});
		}
});

app.get('/admin/login',function(req,res){
	if(req.session.username_admin)
		{
		res.redirect('/admin/index');
		}
	else
		{
		res.render('login.ejs',{error_login:(req.session.login_error) ? req.session.login_error : ''});
		}
});
app.post('/admin/login',function(req,res){
	process.login(req, res, function(status){
		if(status)
			{
			if(req.session.login_error)
				{
				delete req.session.login_error;
				}
			res.redirect('/admin/index');
			
			}
		else
			{
			req.session.login_error = 'Tên đăng nhập hoặc mật khẩu không đúng';
			res.redirect('/admin/login');
			}
	});
});
app.get('/admin/logout', function(req,res){
	req.session.destroy(function(){
		res.redirect('/admin/login');
	});
});
