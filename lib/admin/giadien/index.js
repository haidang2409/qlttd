var express = require('express');
var app = module.exports = express();
var giadien = require('./phanmucgia');

app.set('views', __dirname);
app.set('view engine', 'ejs');

//get
app.post('/admin/giadien-them', function(req, res){
	if(!req.session.username_admin)
		{
		res.json('no_session_admin');
		}
	else
		{
		giadien.themgiadien(req, function(st){
			res.json(st);
		});
		}
});
app.post('/admin/giadien-them-sua', function(req, res){
	if(!req.session.username_admin)
		{
		res.json('no_session_admin');
		}
	else
		{
		giadien.themgiadiensua(req, function(st){
			res.json(st);
		});
		}
});