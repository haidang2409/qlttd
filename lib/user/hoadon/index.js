var express = require('express');
var app = module.exports = express();
var hd = require('./hoadon');
var hd_admin = require('../../admin/hoadon/hoadon');
app.set('views', __dirname);
app.set('view engine', 'ejs');
//
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
		page +='<li class="' + disable + '"><a href="'+ href +'"><span class="glyphicon glyphicon-chevron-left"></span></a></li>';
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
		page +='<li class="' + disable2 + '"><a href="'+ href2 +'"><span class="glyphicon glyphicon-chevron-right"></span></a></li>';
		page +='</ul>';
		var x_showed = LIMIT;
		if(total <  LIMIT)
			{
			x_showed = total;
			}
		page += '<div class="pull-right" style="margin-top:2px">'
				+'<h5>'
				+'<span class="badge">Hiển thị: ' +x_showed+'/'+total+'</span>' 
				+'</h5>'
				+'</div>';
		}

	return page;
};
//
app.get('/hoadon', function(req, res){
	if(!req.session.username)
		{
		res.redirect('/');
		}
	else
		{
		var curr_page = (req.query.page != undefined) ? req.query.page : 1;
		var tk_macongto = (req.query.txtTimKiemMaCongTo != undefined) ? req.query.txtTimKiemMaCongTo : "";
		var tk_mahoadon = (req.query.txtTimKiemMaHoaDon != undefined) ? req.query.txtTimKiemMaHoaDon : "";
		var tk_trangthaihd = (req.query.sltTimKiemTrangThaiHD != undefined) ? req.query.sltTimKiemTrangThaiHD : "";
		var tk_thang = (req.query.sltTimKiemThang != undefined) ? req.query.sltTimKiemThang : "";
		var tk_nam = (req.query.sltTimKiemNam != undefined) ? req.query.sltTimKiemNam : "";
		
		var page  = (req.query.page != undefined) ? req.query.page : 0;
		var offset= (page==0) ? 0 : (page - 1) * LIMIT;
		var xparams = {
			mahoadon : tk_mahoadon,
			macongto  : tk_macongto,
			trangthaihd : tk_trangthaihd,
			thang : tk_thang,
			nam : tk_nam,
			curr_page: curr_page,
			offset   : offset,
			limit    : LIMIT
			};
		hd.getTableHoaDon(req, xparams, function(status, data, total_data){
			var url = '/hoadon?txtTimKiemMaHoaDon=' + tk_mahoadon + '&txtTimKiemMaCongTo=' + tk_macongto + '&sltTimKiemTrangThaiHD=' + tk_trangthaihd + '&sltTimKiemThang=' + tk_thang + '&sltTimKiemNam=' + tk_nam + '&page=';
			var params = {
				title : 'Hóa đơn',
				hoadon  : data,
				total_data : total_data,
				pagination : paging(total_data,curr_page,url),
				curr_page  : curr_page,
				curr_tk_mahoadon : tk_mahoadon,
				curr_tk_macongto : tk_macongto,
				curr_tk_trangthaihd : tk_trangthaihd,
				curr_tk_thang : tk_thang,
				curr_tk_nam : tk_nam
			};
			res.render('hoadon.ejs',params);
		});
		}
});
app.post('/hoadon-chitiet', function(req, res){
	hd.getHoaDonChiTiet(req, function(dt){
		res.json(dt);
	});
});

app.post('/hoadon-thanhtoan', function(req, res){
	var temp = JSON.parse(JSON.stringify(req.body));
	var d = new Date();
	var ngaytt = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
	var hoadon = {
			dathanhtoan : 1,
			ngaythanhtoan : ngaytt
	};
	hd_admin.suaHoaDon(req, hoadon, temp.mahoadon, function(st){
		req.session.info = 'Thanh toán thành công.';
		res.json(st);
	});
});
app.post('/inhoadon', function(req, res){
	var temp = JSON.parse(JSON.stringify(req.body));
	var arrHD = temp.chkChonHoaDon;
	if(arrHD != undefined)
		{
		hd.getDSHoaDon(req, arrHD, function(dt){
			res.render('inhoadon2.ejs', {dt: dt});
		});
		}
	else
		{
		res.send('Không có hóa đơn được chọn');
		}

});
