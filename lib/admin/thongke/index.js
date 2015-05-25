var express = require('express');
var app = module.exports = express();
var tk = require('./thongke');
var tba = require('../trambienap/trambienap');
app.set('views',__dirname);
app.set('view engine', 'ejs');

app.get('/admin/thongke-1', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		var tk_thang = (req.query.sltTimKiemThang != undefined) ? req.query.sltTimKiemThang : "";
		var tk_nam = (req.query.sltTimKiemNam != undefined) ? req.query.sltTimKiemNam : "";
		var tk_trambienap = (req.query.sltTimKiemTramBienAp != undefined) ? req.query.sltTimKiemTramBienAp : "";
		var xparam = {
			thang : tk_thang,
			nam : tk_nam,
			trambienap: tk_trambienap
		};
		tk.getTableBaoCao1(req, xparam, function(dt){
			tba.getListTramBienAp(req, function(tba){
				var params = {
						tba: tba,
						data : dt,
						curr_tk_thang : tk_thang,
						curr_tk_nam : tk_nam,
						curr_tk_trambienap: tk_trambienap
					};
					res.render('diennangtt.ejs',params);
			});
		});
		}
});