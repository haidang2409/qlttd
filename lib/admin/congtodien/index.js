var express = require('express');
var app = module.exports = express();
var process = require('./congtodien');
var kh = require('../khachhang/process');
var tba = require('../trambienap/trambienap');
app.set('views', __dirname);
app.set('view engine', 'ejs');

var LIMIT = 5;

function paging(total, curr_page, url){
	var page = '';
	var total_page = Math.ceil(total/LIMIT);
	if(total > LIMIT)
		{
		page = '<ul class="pagination">';
		var disable = '', href = '';
		if(parseInt(curr_page) >1)
			{
			href = url+(parseInt(curr_page)-1);
			}
		else
			{
			href='javascript: void(0)';
			disable = 'disabled';
			}
		page +='<li class="' + disable + '"><a href="'+ href +'">Prev</a></li>';
		for(x = 1; x <= total_page; x++){
			var active = '';
			if(x == curr_page)
				{
				active = 'class="active"';
				}
			page +='<li '+active+'><a href="'+url+x+'">'+x+'</a></li>';
		}
		var disable2 = '', href2 = '';
		if(parseInt(curr_page) < total_page)
			{
			href2 = url+(parseInt(curr_page)+1);
			}
		else
			{
			href2 = 'javascript: void(0)';
			disable2 = 'disabled';
			}
		page +='<li class="' + disable2 + '"><a href="'+ href2 +'">Next</a></li>';
		page +='</ul>';
		var x_showed = LIMIT;
		if(total <  LIMIT)
			{
			x_showed = total;
			}
		page += '<div class="pull-right" style="margin-top:2px">'
				+'<h5>'
				+' <small>' +x_showed+'/'+total+'</small>' 
				+'</h5>'
				+'</div>';
		}
	return page;
};
app.get('/admin/congtodien', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		var curr_page = (req.query.page != undefined) ? req.query.page : 1;
		var tk_macongto = (req.query.txtTimKiemMaCongTo != undefined) ? req.query.txtTimKiemMaCongTo : "";
		var tk_hotenkh = (req.query.txtTimKiemHoTenKH != undefined) ? req.query.txtTimKiemHoTenKH : "";
		var tk_trambienap = (req.query.sltTimKiemTramBienAp != undefined) ? req.query.sltTimKiemTramBienAp : "";
		var tk_trangthai = (req.query.sltTimKiemTrangThai != undefined) ? req.query.sltTimKiemTrangThai : "";
		
		var page  = (req.query.page != undefined) ? req.query.page : 0;
		var offset= (page==0) ? 0 : (page - 1) * LIMIT;
		var xparams = {
			curr_page: curr_page,
			macongto  : tk_macongto,
			hotenkh : tk_hotenkh,
			trambienap : tk_trambienap,
			trangthai : tk_trangthai,
			offset   : offset,
			limit    : LIMIT
			};
		console.log(xparams);
		process.listCongToDien(req, xparams, function(status, data, total_data){
			tba.getListTramBienAp(req, function(tba){
				var url = '/admin/congtodien?txtTimKiemMaCongTo='+tk_macongto+'&txtTimKiemHoTenKH='+tk_hotenkh+'&sltTimKiemTramBienAp='+tk_trambienap+'&sltTimKiemTrangThai='+tk_trangthai+'&page=';
				var params = {
					title : 'Danh sách công tơ điện',
					congtodien  : data,
					total_data : total_data,
					pagination : paging(total_data,curr_page,url),
					curr_page  : curr_page,
					tba : tba,
					curr_tk_macongto : tk_macongto,
					curr_tk_hotenkh : tk_hotenkh,
					curr_tk_trambienap : tk_trambienap,
					curr_tk_trangthai : tk_trangthai
					
				};
				res.render('congtodien.ejs',params);
			});
			
		});
		}
});
app.get('/admin/congtodien-them', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		process.AtCrMaCongToDien(req, function(mct){
			var macongto = mct;
			kh.AtCrMaKhachHang(req, function(mkh){
				var makhachhang = mkh;
				tba.getListTramBienAp(req, function(trba){
					var tba = trba;
					process.getMucDich(req, function(dt){
						var mucdichsd = dt;
						res.render('congtodien-them.ejs', {macongto : macongto, makhachhang: makhachhang, tba : tba, mucdichsd: mucdichsd});
					});
				});
			});
		});
		
		}
});
app.post('/admin/congtodien-an', function(req, res){
	if(!req.session.username_admin)
		{
		res.json('no_session');
		}
	else
		{
		process.anCongToDien(req, function(s){
			res.json(s);
		});
		}
});
app.post('/admin/congtodien-hien', function(req, res){
	if(!req.session.username_admin)
		{
		res.json('no_session');
		}
	else
		{
		process.hienCongToDien(req, function(s){
			res.json(s);
		});
		}
});
app.post('/admin/congtodien-xoa', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		process.kiemtrarangbuotCongToDien(req, function(status){
			if(status == true)
				{
				res.json('khongthexoa');
				}
			else
				{
				process.xoaCongToDien(req, function(status, mess){
					res.json(status);
				});
				}
		});
		}
});
app.post('/admin/congtodien-them', function(req, res){
	if(!req.session.username_admin)
		{
		res.json('no_session');
		}
	else
		{
		process.congtodienthem(req, function(status){
			res.json(status);
		});
		}
});
app.post('/admin/congtodien-bosung', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		kh.AtCrMaKhachHang(req, function(makh){
			res.render('congtodien-bosung.ejs',{makhachhang : makh});
		});
		}
});
app.post('/admin/congtodien-sua', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		var temp = JSON.parse(JSON.stringify(req.body));
		var macongto = temp.macongto;
		for(var key in temp)
			{
			macongto = key;
			}
		tba.getListTramBienAp(req, function(dt){
			process.getCongToDien(req, macongto, function(row){
				process.getMucDich(req, function(dt2){
					res.render('congtodien-sua.ejs', {data : row, tba : dt, mucdichsd : dt2});
				});
			});
		});
		}
});
app.post('/admin/congtodien-sualuu', function(req, res){
	if(!req.session.username_admin)
		{
		res.json('no_session');
		}
	else
		{
		process.congtodiensua2(req, function(st){
			res.json(st);
		});
		}
});