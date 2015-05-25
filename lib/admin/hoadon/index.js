var express = require('express');
var app = module.exports = express();
var hd = require('./hoadon');
var tba = require('../trambienap/trambienap');
var nodeExcel = require('excel-export');
app.set('views', __dirname);
app.set('view engine', 'ejs');
//
var LIMIT = 10;

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
//
app.get('/admin/hoadon', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		var curr_page = (req.query.page != undefined) ? req.query.page : 1;
		var tk_macongto = (req.query.txtTimKiemMaCongTo != undefined) ? req.query.txtTimKiemMaCongTo : "";
		var tk_mahoadon = (req.query.txtTimKiemMaHoaDon != undefined) ? req.query.txtTimKiemMaHoaDon : "";
		var tk_hotenkh = (req.query.txtTimKiemHoTenKH != undefined) ? req.query.txtTimKiemHoTenKH : "";
		var tk_trambienap = (req.query.sltTimKiemTramBienAp != undefined) ? req.query.sltTimKiemTramBienAp : "";
		var tk_trangthaihd = (req.query.sltTimKiemTrangThaiHD != undefined) ? req.query.sltTimKiemTrangThaiHD : "";
		var tk_thang = (req.query.sltTimKiemThang != undefined) ? req.query.sltTimKiemThang : "";
		var tk_nam = (req.query.sltTimKiemNam != undefined) ? req.query.sltTimKiemNam : "";
		
		var page  = (req.query.page != undefined) ? req.query.page : 0;
		var offset= (page==0) ? 0 : (page - 1) * LIMIT;
		var xparams = {
			mahoadon : tk_mahoadon,
			macongto  : tk_macongto,
			hotenkh : tk_hotenkh,
			trambienap : tk_trambienap,
			trangthaihd : tk_trangthaihd,
			thang : tk_thang,
			nam : tk_nam,
			curr_page: curr_page,
			offset   : offset,
			limit    : LIMIT
			};
		hd.getTableHoaDon(req, xparams, function(status, data, total_data){
			tba.getListTramBienAp(req, function(tba){
				var url = '/admin/hoadon?txtTimKiemMaHoaDon=' + tk_mahoadon + '&txtTimKiemMaCongTo=' + tk_macongto + '&txtTimKiemHoTenKH=' + tk_hotenkh + '&sltTimKiemTramBienAp=' + tk_trambienap + '&sltTimKiemTrangThaiHD=' + tk_trangthaihd + '&sltTimKiemThang=' + tk_thang + '&sltTimKiemNam=' + tk_nam + '&page=';
				var params = {
					title : 'Hóa đơn',
					hoadon  : data,
					total_data : total_data,
					pagination : paging(total_data,curr_page,url),
					curr_page  : curr_page,
					tba : tba,
					curr_tk_mahoadon : tk_mahoadon,
					curr_tk_macongto : tk_macongto,
					curr_tk_trangthaihd : tk_trangthaihd,
					curr_tk_thang : tk_thang,
					curr_tk_nam : tk_nam,
					curr_tk_trambienap : tk_trambienap,
					curr_tk_hotenkh : tk_hotenkh
				};
				res.render('hoadon.ejs',params);
			});
		});
		}
});
app.post('/admin/hoadon-chitiet', function(req, res){
	hd.getHoaDonChiTiet(req, function(dt){
		res.json(dt);
	});
});
app.get('/admin/export-hoadon',function(req,res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		var tk_macongto = (req.query.txtTimKiemMaCongTo != undefined) ? req.query.txtTimKiemMaCongTo : "";
		var tk_mahoadon = (req.query.txtTimKiemMaHoaDon != undefined) ? req.query.txtTimKiemMaHoaDon : "";
		var tk_hotenkh = (req.query.txtTimKiemHoTenKH != undefined) ? req.query.txtTimKiemHoTenKH : "";
		var tk_trambienap = (req.query.sltTimKiemTramBienAp != undefined) ? req.query.sltTimKiemTramBienAp : "";
		var tk_trangthaihd = (req.query.sltTimKiemTrangThaiHD != undefined) ? req.query.sltTimKiemTrangThaiHD : "";
		var tk_thang = (req.query.sltTimKiemThang != undefined) ? req.query.sltTimKiemThang : "";
		var tk_nam = (req.query.sltTimKiemNam != undefined) ? req.query.sltTimKiemNam : "";
		
		var xparams = {
			mahoadon : tk_mahoadon,
			macongto  : tk_macongto,
			hotenkh : tk_hotenkh,
			trambienap : tk_trambienap,
			trangthaihd : tk_trangthaihd,
			thang : tk_thang,
			nam : tk_nam,
			};
		var conf={};
		conf.cols = [{
			caption:'Mã hóa đơn',
			type:'string',
			},{
			caption:'Họ tên khách hàng',
			type:'sring',
			},{
			caption:'Từ ngày',
			type:'string'
			},{
			caption:'Đến ngày',
			type:'string'
			},{
			caption:'CSM',
			type:'number'
			},{
			caption:'CSC',
			type:'number'
			},{
			caption:'CSTT',
			type:'number'
			},{
			caption:'Thuế',
			type:'number'	
			},{
			caption:'Tổng thanh toán',
			type:'number'	
			}];
		arr = [];
		hd.getTableHoaDonExport(req, xparams, function(status, data){
			for(var i=0; i< data.length; i++)
			{
				a = [data[i].mahoadon, data[i].hotenkh, getDate(data[i].tungay), getDate(data[i].denngay), data[i].chisomoi, data[i].chisocu, data[i].chisothucthu, data[i].thuthue, data[i].tongthanhtoan];
				arr.push(a);
			}
			conf.rows = arr;
			var result=nodeExcel.execute(conf);
			res.setHeader('Content-Type','application/vnd.openxmlformates');
			res.setHeader("Content-Disposition","attachment;filename="+"danhsachhoadon.xlsx");
			res.end(result,'binary');
		});
		}
});

