var express = require('express');
var app = module.exports = express();
var tintuc = require('./tintuc');
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
//get
app.get('/admin/test', function(req, res){
	res.send(getDate());
});
app.get('/admin/tintuc', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
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
		tintuc.listTinTuc(req, xparams, function(status, data, total_data){
			var url = '/admin/tintuc?timkiem='+timkiem+'&page=';
			var params = {
				title : 'Danh sách tin tức',
				tintuc  : data,
				total_data : total_data,
				pagination : paging(total_data,curr_page,url),
				curr_page  : curr_page,
				curr_timkiem: timkiem,
				//sess_user  :(req.session.username) ? req.session.username : ''
			};
			
			res.render('tintuc.ejs',params);
		});
		}
});
app.get('/admin/tintuc-them', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		var data_loi = {
			loi_tieude : '',
			loi_tomtac : '',
			loi_noidung : '',
			loi_anhtieude : '',
			tieude : '',
			tomtac : '',
			noidung : '',
			trangthai : true,
			title : 'Thêm tin tức'
		};
		res.render('tintuc-them.ejs', {data_loi : data_loi});
		}	
});
app.get('/admin/tintuc-sua', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		tintuc.getInfoTinTuc(req, function(status, data){
			if(status == true)
				{
				var data_loi = {
						loi_tieude : '',
						loi_tomtac : '',
						loi_noidung : '',
						loi_anhtieude : '',
						title : 'Sửa tin tức'
					};
				res.render('tintuc-sua.ejs', {data_loi : data_loi, tintuc : data});
				}
		});
		}
});

//post
var fs = require('fs');
app.post('/admin/tintuc-them', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		var temp = JSON.parse(JSON.stringify(req.body));
		var hasError = false, loi_tieude = '', loi_tomtac = '', loi_noidung = '', loi_anhtieude = '';
		var tieude = '', tomtac = '', noidung = '', trangthai = false;
		if(temp.tieude == '')
			{
			loi_tieude = 'Tiêu đề không được để trống';
			hasError = true;
			}
		if(temp.tomtac == '')
			{
			loi_tomtac = 'Tóm tắc không được để trống';
			hasError = true;
			}
		if(temp.noidung == '')
			{
			loi_noidung = 'Nội dung không được để trống';
			hasError = true;
			}
		/*console.log(temp.anhtieude);
		if(req.files.anhtieude = 'undefined')
			{
			loi_anhtieude = 'Ảnh tiêu đề phải được chọn';
			hasError = true;
			}*/
		if(temp.trangthai == 'on')
			{
			trangthai = true;
			}
		if(hasError == true)
			{
			var data_loi = {
					loi_tieude : loi_tieude,
					loi_tomtac : loi_tomtac,
					loi_noidung : loi_noidung,
					loi_anhtieude : loi_anhtieude,
					tieude : temp.tieude,
					tomtac : temp.tomtac,
					noidung : temp.noidung,
					trangthai: trangthai
			};
			res.render('tintuc-them.ejs', {data_loi : data_loi});
			}
		else
			{
			fs.readFile(req.files.anhtieude.path, function(err, data){
				if(err)
					{
					var data_loi = {
							loi_tieude : '',
							loi_tomtac : '',
							loi_noidung : '',
							loi_anhtieude : 'Không đọc được hình ảnh',
							tieude : temp.tieude,
							tomtac : temp.tomtac,
							noidung : temp.noidung,
							trangthai: trangthai
					};
					res.render('tintuc-them.ejs', {data_loi : data_loi});
					}
				else
					{
					var imName = req.files.anhtieude.name;
					if(!imName)
						{
						var data_loi = {
								loi_tieude : '',
								loi_tomtac : '',
								loi_noidung : '',
								loi_anhtieude : 'Không đọc được hình ảnh',
								tieude : temp.tieude,
								tomtac : temp.tomtac,
								noidung : temp.noidung,
								trangthai: trangthai
						};
						res.render('tintuc-them.ejs', {data_loi : data_loi});
						}
					else
						{
						var newPath = __dirname + "../../../../public/uploads/" + imName;
						fs.writeFile(newPath, data, function (err) {
							if(err)
								{
								var data_loi = {
										loi_tieude : '',
										loi_tomtac : '',
										loi_noidung : '',
										loi_anhtieude : 'Không upload được hình ảnh',
										tieude : temp.tieude,
										tomtac : temp.tomtac,
										noidung : temp.noidung,
										trangthai: trangthai
								};
								res.render('tintuc-them.ejs', {data_loi : data_loi});
								}
							else
								{
								tintuc.themtintuc(req, function(status){
									if(status == true)
										{
										res.redirect('/admin/tintuc');
										}
								});
								}
							
						});
						}
					}
			});
			}
		}
});

app.post('/admin/tintuc-sua-luu', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('/admin/login');
		}
	else
		{
		var temp = JSON.parse(JSON.stringify(req.body));
		var hasError = false, loi_tieude = '', loi_tomtac = '', loi_noidung = '', loi_anhtieude = '';
		var tieude = '', tomtac = '', noidung = '', trangthai = false;
		if(temp.tieude == '')
			{
			loi_tieude = 'Tiêu đề không được để trống';
			hasError = true;
			}
		if(temp.tomtac == '')
			{
			loi_tomtac = 'Tóm tắc không được để trống';
			hasError = true;
			}
		if(temp.noidung == '')
			{
			loi_noidung = 'Nội dung không được để trống';
			hasError = true;
			}
		/*console.log(temp.anhtieude);
		if(req.files.anhtieude = 'undefined')
			{
			loi_anhtieude = 'Ảnh tiêu đề phải được chọn';
			hasError = true;
			}*/
		if(temp.trangthai == 'on')
			{
			trangthai = true;
			}
		if(hasError == true)
			{
			var data_loi = {
					loi_tieude : loi_tieude,
					loi_tomtac : loi_tomtac,
					loi_noidung : loi_noidung,
					loi_anhtieude : loi_anhtieude,
					tieude : temp.tieude,
					tomtac : temp.tomtac,
					noidung : temp.noidung,
					trangthai: trangthai
			};
			res.render('tintuc-sua.ejs', {data_loi : data_loi});
			}
		else
			{
			fs.readFile(req.files.anhtieude.path, function(err, data){
				if(err)
					{
					var data_loi = {
							loi_tieude : '',
							loi_tomtac : '',
							loi_noidung : '',
							loi_anhtieude : 'Không đọc được hình ảnh',
							tieude : temp.tieude,
							tomtac : temp.tomtac,
							noidung : temp.noidung,
							trangthai: trangthai
					};
					res.render('tintuc-them.ejs', {data_loi : data_loi});
					}
				else
					{
					var imName = req.files.anhtieude.name;
					if(!imName)
						{
						var data_loi = {
								loi_tieude : '',
								loi_tomtac : '',
								loi_noidung : '',
								loi_anhtieude : 'Không đọc được hình ảnh',
								tieude : temp.tieude,
								tomtac : temp.tomtac,
								noidung : temp.noidung,
								trangthai: trangthai
						};
						res.render('tintuc-them.ejs', {data_loi : data_loi});
						}
					else
						{
						var newPath = __dirname + "../../../../public/uploads/" + imName;
						fs.writeFile(newPath, data, function (err) {
							if(err)
								{
								var data_loi = {
										loi_tieude : '',
										loi_tomtac : '',
										loi_noidung : '',
										loi_anhtieude : 'Không upload được hình ảnh',
										tieude : temp.tieude,
										tomtac : temp.tomtac,
										noidung : temp.noidung,
										trangthai: trangthai
								};
								res.render('tintuc-them.ejs', {data_loi : data_loi});
								}
							else
								{
								tintuc.themtintuc(req, function(status){
									if(status == true)
										{
										res.redirect('/admin/');
										}
								});
								}
							
						});
						}
					}
			});
			}
		}
});
app.post('/admin/tintuc-xoa', function(req, res){
	
});
app.post('/admin/tintuc-an', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('admin/login');
		}
	else
		{
		tintuc.anTinTuc(req, function(status){
			res.json(status);
		});
		}
});
app.post('/admin/tintuc-hien', function(req, res){
	if(!req.session.username_admin)
		{
		res.redirect('admin/login');
		}
	else
		{
		tintuc.hienTinTuc(req, function(status){
			res.json(status);
		});
		}
});
function getDate (){
	var date = new Date('Thu Mar 19 2015 00:00:00 GMT+0700 (SE Asia Standard Time)');
	var result = '';
	result = date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate();
	return result;
};