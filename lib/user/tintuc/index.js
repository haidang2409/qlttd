var express = require('express');
var app = module.exports = express();
var tintuc = require('../../admin/tintuc/tintuc');
app.set('views',__dirname);
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

app.get('/', function(req, res){
	res.redirect('/home');
});
app.get('/home', function(req, res){
	var curr_page = (req.query.page != undefined) ? req.query.page : 1;
	var timkiem = (req.query.timkiem != undefined) ? req.query.timkiem : "";
	var page  = (req.query.page != undefined) ? req.query.page : 0;
	var offset= (page==0) ? 0 : (page - 1) * LIMIT;
	var xparams = {
		curr_page: curr_page,
		timkiem  : timkiem,
		offset   : offset,
		limit    : LIMIT
		};
	tintuc.listTinTuc_user(req, xparams, function(status, data, total_data){
			var url = '/home?timkiem='+timkiem+'&page=';
			var params = {
				title : 'Trang chủ',
				tintuc  : data,
				total_data : total_data,
				pagination : paging(total_data,curr_page,url),
				curr_page  : curr_page,
				curr_timkiem: timkiem,
				trangchu : true
			};
			res.render('tintuc.ejs',params);
	});
});
app.get('/home-tintuc-ct', function(req, res){
	tintuc.getInfoTinTuc_user(req, function(status, data){
		tintuc.listTieuDeTinTuc_user(req, function(err, data2){
			if(status == true && err==true)
			{
			res.render('tintuc-ct.ejs', {tintuc : data, tieudett : data2});
			}
		});
		
	});
});
////

var nodeExcel = require('excel-export');
app.get('/Excel', function(req, res){
	var conf = {};
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
	var a=[];
	for(var i=0; i < 5; i++)
	{
		a = "['123','Nguyễn Hải Đăng', '1/1/2015', '31/1/2015', 30, 5, 25, 10, 100000],";
	}
	conf.rows = [
	         a,    
		//['123','Nguyễn Hải Đăng', '1/1/2015', '31/1/2015', 30, 5, 25, 10, 100000],
	];
	
	var result = nodeExcel.execute(conf);
	res.setHeader('Content-Type', 'application/vnd.openxmlformats');
	res.setHeader("Content-Disposition", "attachment; filename=" + "hoadon.xlsx");
	res.end(result, 'binary');
});
