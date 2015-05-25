var express = require('express');
var app = module.exports = express();
var process = require('./trambienap');

app.set('views', __dirname);
app.set('view engine', 'ejs');

//get
app.get('/admin/trambienap', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		process.getListTramBienAp(req, function(data){
			res.render('trambienap.ejs', {data : data});
		});
		}
});
