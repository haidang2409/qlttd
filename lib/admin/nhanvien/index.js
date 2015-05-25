
var express = require('express');
var app = module.exports = express();
var nhanvien = require('./process');
var qsd = require('../quyensudung/quyensudung');
var process_phongban = require('../phongban/phongban');
app.set('views',__dirname);
app.set('view engine','ejs');
//GET
app.get('/admin/nhanvien-test',function(req,res){
	nhanvien.AtCrMaNhanVien(req, function(manv){
		res.send(manv);
	});
});
app.get('/admin/nhanvien',function(req,res){
	if(!req.session.username_admin)
		{
			res.redirect('/admin/login');
		}
	else
		{
		nhanvien.ListNhanVien(req, function(dt){
			res.render('nhanvien.ejs', {data : dt});
		});
		}
});
//
app.get('/admin/thongtinnhanvien', function(req, res){
	if(req.session.username_admin)
		{
		nhanvien.thongtinnhanvien(req, function(data){
			res.render('thongtinnhanvien.ejs',{data: data});
		});
		}
});
app.get('/admin/nhanvien-them', function(req, res){
	if(!req.session.username_admin)
		{
			res.redirect('/admin/login');
		}
	else
		{
		process_phongban.getListPhongBan(req, function(rows){
			nhanvien.AtCrMaNhanVien(req, function(manv){
				qsd.getQuyenSuDung(req, function(qsd){
				var data = {
						phongban : rows,
						manv : manv,
						qsd : qsd
					};
					res.render('nhanvien-them.ejs', data);
				});
			});
		});
		}
});
app.post('/admin/nhanvien-them-luu', function(req, res){
	if(!req.session.username_admin)
		{
			res.redirect('/admin/login');
		}
	else
		{
		nhanvien.themnhanvien(req, function(st){
			res.json(st);
		});
		}
});
//
app.post('/admin/nhanvien-sua', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		var temp = JSON.parse(JSON.stringify(req.body));
		var manv = temp.manhanvien;
		for(var key in temp)
			{
			manv = key;
			}
		process_phongban.getListPhongBan(req, function(phongban){
			nhanvien.getInfoNhanVien(req, manv, function(data){
				nhanvien.listQuyenNhanVien(req, manv, function(phanquyen){
					qsd.getQuyenSuDung(req, function(qsd){
						res.render('nhanvien-edit.ejs', {data: data, phongban : phongban, qsd : qsd, phanquyen: phanquyen});
				});
				});
			});
		});
		}
});

//
app.post('/admin/nhanvien-sua-luu', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		nhanvien.suanhanvien(req, function(st){
			res.json(st);
		});
		}
});
//
app.post('/admin/nhanvien-kiemtrarangbuoc', function(req, res){
	if(!req.session.username_admin)
		{
			res.json('no_session');
		}
	else
		{
		nhanvien.kiemtrarangbuocnhanvien(req, function(st){
			res.json(st);
		});
		}
});
app.post('/admin/nhanvien-xoa', function(req, res){
	if(!req.session.username_admin)
		{
			res.json('no_session');
		}
	else
		{
		nhanvien.xoanhanvien(req, function(st){
			res.json(st);
		});
		}
});