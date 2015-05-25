var express = require('express');
var app = module.exports = express();
var thongtin = require('./thongtin');
var tintuc = require('../../admin/tintuc/tintuc');
app.set('views',__dirname);
app.set('view engine', 'ejs');

app.get('/thongtinkhachhang', function(req, res){
	if(!req.session.username)
		{
		res.redirect('/home');
		}
	else
		{
		thongtin.getInfoKhachHang(req, function(status, data){
				if(status == true)
					{
					tintuc.listTieuDeTinTuc_user(req, function(err, data2){
						res.render('thongtinkhachhang.ejs',{khachhang : data, title : 'Thông tin khách hàng', tieudett: data2});
					});
					}
		});
		}
});
app.get('/thongtinctd', function(req, res){
	if(!req.session.username)
		{
		res.redirect('/');
		}
	else
		{
		thongtin.thongtincongtodien(req, function(data){
			tintuc.listTieuDeTinTuc_user(req, function(err, data2){
				res.render('thongtincongtodien.ejs',{ctd : data, tieudett: data2});
			});
		});
		}
});
app.get('/thongtingiadien', function(req, res){
	thongtin.getTableGiaDien(req, function(table){
		res.render('thongtingiadien.ejs', {table : table});
	});
//	
});
app.post('/thongtingiadien-chitiet', function(req, res){
	thongtin.getGiaDienChiTiet(req, function(table){
		res.json(table);
	});
});
app.get('/thongtintba', function(req, res){
	thongtin.thongtintba(req, function(data){
		tintuc.listTieuDeTinTuc_user(req, function(err, data2){
			res.render('thongtintba.ejs', {tba: data, tieudett : data2});
		});
	});
});
app.get('/dieukhoansudung', function(req, res){
	thongtin.getDieuKhoanSuDung(req, function(data){
		res.render('dieukhoansudung.ejs', {data: data});
	});
});
app.get('/gioithieuct', function(req, res){
	thongtin.getGioiThieu(req, function(data){
		tintuc.listTieuDeTinTuc_user(req, function(err, data2){
			res.render('gioithieu.ejs', {gioithieu : data, title:'Giới thiệu công ty', tieudett : data2});
		});
	});
});
app.get('/lienhe', function(req, res){
		tintuc.listTieuDeTinTuc_user(req, function(err, data2){
			res.render('lienhe.ejs', {title:'Liên hệ', tieudett : data2, lienhe : true});
		});
});
app.post('/getNhomMDSD', function(req, res){
	thongtin.getNhomMDSD(req, function(data){
		res.json(data);
	});
});
app.post('/getSumMucDichSD', function(req, res){
	thongtin.getSumMucDichSD(req, function(data){
		res.json(data);
	});
});
app.post('/doimatkhau', function(req, res){
	if(!req.session.username)
		{
		res.json('no_session');
		}
	else
		{
		thongtin.updateKhachHang(req, function(st){
			res.json(st);
		});
		}
});
app.get('/vd', function(req, res){
//	thongtin.vidu(req, function(dt){
//		res.send(dt);
//	});
	//res.send(thongtin.vidu2(req));
	var st = '';
	for(var i = 0; i < 10; i++)
		{
		st = st + i;
		if(i == 5)
			{
			break;
			}
		}
	res.send(st);
});