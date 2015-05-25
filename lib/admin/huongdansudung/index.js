var express = require('express');
var app = module.exports = express();
var hdsd = require('./huongdansudung');
var tintuc = require('../../admin/tintuc/tintuc');
app.set('views',__dirname);
app.set('view engine', 'ejs');

app.get('/admin-huongdansudung', function(req, res){
	hdsd.getListHuongDanSuDungKH(req, function(data){
		hdsd.getListHuongDanSuDungNV(req, function(data2){
			if(req.query.id)
				{
				var id = req.query.id;
				hdsd.getInfoHuongDanSuDung(req, id, function(rows){
					res.render('huongdansudung.ejs', {data: data, data2: data2, huongdansd: true, rows: rows, title : 'Hướng dẫn sử dụng'});
				});
				}
			else
				{
					res.render('huongdansudung.ejs', {data: data, data2: data2, huongdansd: true, rows: null, title : 'Hướng dẫn sử dụng'});
				}
		});
	});
});