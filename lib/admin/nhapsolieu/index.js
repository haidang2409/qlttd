var express = require('express');
var app = module.exports = express();
var nsl = require('./nhapsolieu');
var hd = require('../hoadon/hoadon');
var ctd = require('../congtodien/congtodien');
var hdct = require('../hoadonchitiet/hoadonchitiet');
app.set('views',__dirname);
app.set('view engine','ejs');
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
////
app.get('/admin/nhapsolieu', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		hd.kiemtrathoigiantaohoadon(req, function(st){
			if(st == true)
				{
				hd.taohoadon(req, function(i){
					if(i == true)
						{
						var curr_page = (req.query.page != undefined) ? req.query.page : 1;
						var qsearch = (req.query.timkiem != undefined) ? req.query.timkiem : "";
						var page  = (req.query.page != undefined) ? req.query.page : 0;
						var offset= (page==0) ? 0 : (page - 1) * LIMIT;
						var xparams = {
							curr_page: curr_page,
							timkiem  : qsearch,
							offset   : offset,
							limit    : LIMIT
							};
						nsl.getListHoaDon(req, xparams, function(status, data, total_data){
							var url = '/admin/nhapsolieu?timkiem='+qsearch+'&page=';
							var params = {
								title : 'Nhập số liêu điện năng tiêu thụ',
								data  : data,
								total_data : total_data,
								pagination : paging(total_data,curr_page,url),
								curr_page  : curr_page,
								curr_timkiem: qsearch,
							};
							res.render('nhapsolieu.ejs',params);
						});
						}
				});
				}
			else
				{
				var curr_page = (req.query.page != undefined) ? req.query.page : 1;
				var qsearch = (req.query.timkiem != undefined) ? req.query.timkiem : "";
				var page  = (req.query.page != undefined) ? req.query.page : 0;
				var offset= (page==0) ? 0 : (page - 1) * LIMIT;
				var xparams = {
					curr_page: curr_page,
					timkiem  : qsearch,
					offset   : offset,
					limit    : LIMIT
					};
				nsl.getListHoaDon(req, xparams, function(status, data, total_data){
					var url = '/admin/nhapsolieu?timkiem='+qsearch+'&page=';
					var params = {
						title : 'Nhập số liêu điện năng tiêu thụ',
						data  : data,
						total_data : total_data,
						pagination : paging(total_data,curr_page,url),
						curr_page  : curr_page,
						curr_timkiem: qsearch,
					};
					res.render('nhapsolieu.ejs',params);
				});
				}
		});

		}
});
app.post('/admin/nhapsolieu', function(req, res){
	if(!req.session.username_admin && !req.session.username)
		{
		res.json('no_session');
		}
	else
		{
		var temp = JSON.parse(JSON.stringify(req.body));
		var hoadon = {
				chisomoi : temp.chisomoi,
				chisothucthu : temp.chisothucthu,
		};
		hd.suaHoaDon(req, hoadon, temp.mahoadon, function(st){
			if(st == true)
				{
				hdct.deteleHoaDonChiTiet(req, temp.mahoadon, function(st2){
					if(st2 == true)
						{
						hdct.themGiaBacThang(req, temp.chisothucthu, temp.mahoadon, temp.mamucdich, function(st3){
							if(st3 == true)
								{
								var congtodien = {
									chisomoinhat : temp.chisomoi,	
								};
								ctd.congtodiensua(req, congtodien, temp.macongto, function(st4){
									if(st4 == true)
										{
										hd.updateHoaDonThanhTien(req, temp.mahoadon, function(st5){
											if(st5 == true)
												{
												res.json(st5);
												}
										});
										}
								});
								
								}
						});
						}
				});
				
				}
		});
		}
});
app.post('/admin/nhapsolieu-0', function(req, res){
	if(!req.session.username_admin && !req.session.username)
		{
		res.json('no_session');
		}
	else
		{
		var temp = JSON.parse(JSON.stringify(req.body));
		var hoadon = {
				chisomoi : 0,
				chisothucthu : 0,
		};
		hd.suaHoaDon(req, hoadon, temp.mahoadon, function(st){
			if(st == true)
				{
				hdct.deteleHoaDonChiTiet(req, temp.mahoadon, function(st2){
					if(st2 == true)
						{
								hd.updateHoaDonThanhTien(req, temp.mahoadon, function(st5){
									if(st5 == true)
										{
										res.json(st5);
										}
								});
						}
				});
				}
		});
		}
});