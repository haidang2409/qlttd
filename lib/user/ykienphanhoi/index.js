var express = require('express');
var app = module.exports = express();
var process = require('./process');

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
/////
app.get('/ykienphanhoi', function(req, res){
	var curr_page = (req.query.page != undefined) ? req.query.page : 1;
	var page  = (req.query.page != undefined) ? req.query.page : 0;
	var offset= (page==0) ? 0 : (page - 1) * LIMIT;
	var xparams = {
		curr_page: curr_page,
		offset   : offset,
		limit    : LIMIT
		};
	process.getListYKienPhanHoi(req, xparams, function(status, data, total_data){
		var url = 'ykienphanhoi?page=';
		var params = {
			title : 'Hỏi và đáp',
			data  : data,
			total_data : total_data,
			pagination : paging(total_data,curr_page,url),
			curr_page  : curr_page,
		};
		res.render('ykienphanhoi.ejs',params);
	});
	
});
app.post('/ykienphanhoi-them', function(req, res){
	if(!req.session.username)
		{
		res.json('no_session');
		}
	else
		{
		process.ykienthem(req, function(status){
			res.json(status);
		});
		}
});
//app.post('/admin/khachhang-edit', function(req, res){
//	var temp = JSON.parse(JSON.stringify(req.body));
//	var makh = temp.makhachhang;
//	for(var key in temp)
//		{
//		makh = key;
//		}
//	console.log(makh);
//	process.getInfoCustomer(req, makh, function(row){
//		res.render('khachhang-edit.ejs', {data : row});
//	});
//});
//app.post('/admin/khachhang-sualuu', function(req, res){
//	if(!req.session.username_admin)
//		{
//		res.redirect('/admin/login');
//		}
//	else
//		{
//		process.updateKhachHang(req, function(st){
//			res.json(st);
//		});
//		}
//});