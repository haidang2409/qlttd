var express = require('express');
var app = module.exports = express();
var mdsd = require('./mucdichsudung');
var nhommdsd = require('../nhommdsd/nhommdsd');
app.set('views', __dirname);
app.set('view engine', 'ejs');

//get
app.get('/admin/mucdichsudung-them', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		nhommdsd.getNhomMDSD(req, function(dt){
			res.render('mucdichsudung-them.ejs', {nhommdsd : dt});
		});
		}
});
app.post('/admin/mucdichsudung-sua', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		var temp = JSON.parse(JSON.stringify(req.body));
		var mamucdich = temp.mamucdich;
		for(var key in temp)
			{
			mamucdich = key;
			}
		mdsd.getMucDichSuDung(req, mamucdich, function(dtMD){
			nhommdsd.getNhomMDSD(req, function(dt){
				res.render('mucdichsudung-sua.ejs', {nhommdsd : dt, mucdichsd : dtMD});
			});
		});
		}
});
app.post('/admin/mucdichsudung-sualuu', function(req, res){
	if(!req.session.username_admin)
		{
		res.json('no_session');
		}
	else
		{
		mdsd.suamucdichsudung(req, function(st){
			res.json(st);
		});
		}
});
app.post('/admin/mucdichsudung-them', function(req, res){
	if(!req.session.username_admin)
		{
		res.json('no_session_admin');
		}
	else
		{
		mdsd.themmucdichsudung(req, function(st){
			res.json(st);
		});
		}
});
app.get('/admin/mucdichsudung', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		mdsd.getTableGiaDien(req, function(table){
			res.render('mucdichsudung.ejs', {table : table});
		});
		}
});