var express = require('express');
var app = module.exports = express();
var hdsd = require('./huongdansudung');
var tintuc = require('../../admin/tintuc/tintuc');
app.set('views',__dirname);
app.set('view engine', 'ejs');

app.get('/huongdansudung', function(req, res){
	hdsd.getListHuongDanSuDung(req, function(data){
		if(req.query.id)
			{
			var id = req.query.id;
			hdsd.getInfoHuongDanSuDung(req, id, function(rows){
				res.render('huongdansudung.ejs', {data: data, huongdansd: true, rows: rows});
			});
			}
		else
			{
			tintuc.listTieuDeTinTuc_user(req, function(err, data2){
				res.render('huongdansudung.ejs', {data: data, huongdansd: true, rows: null, tieudett: data2});
			});
			}
	});
});