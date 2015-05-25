var express = require('express');
var app = module.exports = express();
var process = require('./nhommdsd');

app.set('views', __dirname);
app.set('view engine', 'ejs');

//get
app.get('/admin/nhommdsd', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		process.getNhomMDSD(req, function(data){
			res.render('nhommdsd.ejs', {nhommdsd : data});
		});
		}
});
app.get('/admin/nhommdsd-them', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		res.render('nhommdsd-them.ejs');
		}
});
app.get('/admin/nhommdsd-sua', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		res.render('nhommdsd-sua.ejs');
		}
});
app.post('/admin/nhommdsd-them', function(req, res){
	if(!req.session.username_admin)
		{
		res.json('no_session');
		}
	else
		{
		process.themnhommdsd(req, function(status){
			res.json(status);
		});
		}
});
app.post('/admin/nhommdsd-an', function(req, res){
	if(!req.session.username_admin)
		{
		res.json('no_session');
		}
	else
		{
		process.annhommdsd(req, function(status){
			res.json(status);
		});
		}
});
app.post('/admin/nhommdsd-hien', function(req, res){
	if(!req.session.username_admin)
		{
		res.json('no_session');
		}
	else
		{
		process.hiennhommdsd(req, function(status){
			res.json(status);
		});
		}
});
app.post('/admin/nhommdsd-xoa', function(req, res){
	if(!req.session.username_admin)
		{
		res.json('no_session');
		}
	else
		{
		process.xoanhommdsd(req, function(status){
			res.json(status);
		});
		}
});