var express = require('express');
var app = module.exports = express();
var process = require('./phongban');

app.set('views', __dirname);
app.set('view engine', 'ejs');
//

//GET
app.get('/admin/phongban', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		process.getListPhongBan(req, function(rows){
			var data = {
				phongban : rows,
				title : 'Quản lý phòng ban'
			};
			res.render('phongban.ejs', data);
		});
		}
});
app.get('/admin/phongban-them', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		res.render('phongban-them.ejs');
		}
});
app.get('/admin/phongban-sua', function(req, res){
	
});
//POST
app.post('/admin/phongban-them', function(req, res){
	if(!req.session.username_admin)
		{
		
		}
	else
		{
		process.themphongban(req, function(status){
			res.json(status);
		});
		}
});
app.post('/admin/getInfophongban', function(req, res){
	if(!req.session.username_admin)
	{
	res.json('no_session');
	}
else
	{
	process.getOnePhongBan(req, function(data){
		res.render('phongban-sua.ejs', {phongban : data});
	});
	}
});
app.post('/admin/phongban-sua', function(req, res){
	if(!req.session.username_admin)
	{
	
	}
else
	{
	process.suaphongban(req, function(status){
		res.json(status);
	});
	}
});
app.post('/admin/phongban-xoa', function(req, res){
	if(!req.session.username_admin)
	{
	
	}
else
	{
	process.xoaPhongBan(req, function(status){
		res.json(status);
		console.log(status);
	});
	}
});
app.post('/admin/phongban-hien', function(req, res){
	if(!req.session.username_admin)
	{
	
	}
else
	{
	process.hienphongban(req, function(status){
		res.json(status);
	});
	}
});
app.post('/admin/phongban-an', function(req, res){
	if(!req.session.username_admin)
	{
	
	}
else
	{
	process.anphongban(req, function(status){
		res.json(status);
	});
	}
});