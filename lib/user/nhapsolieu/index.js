var express = require('express');
var app = module.exports = express();
var nsl = require('./nhapsolieu');
//var hd = require('../hoadon/hoadon');
//var ctd = require('../congtodien/congtodien');
//var hdct = require('../hoadonchitiet/hoadonchitiet');
app.set('views',__dirname);
app.set('view engine','ejs');
//
////
app.get('/nhapsolieu', function(req, res){
	if(!req.session.username)
		{
		res.redirect('/');
		}
	else
		{
		nsl.getListHoaDon(req,function(status, data){
			if(status == true)
				{
				res.render('nhapsolieu.ejs',{data: data});
				}
		});
		}
});