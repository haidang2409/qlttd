exports.themmucdichsudung = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('INSERT INTO mucdichsudung SET ?', [temp], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false, err);
				}
			else
				{
				req.session.info = 'Thêm mục đích sử dụng thành công.';
				return fn(true);
				}
		});
	});
};
exports.suamucdichsudung = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	var mamucdich = temp.mamucdich;
	var mdsd = {
			manhommdsd : temp.manhommdsd,
			mucdich : temp.mucdich,
			thue : temp.thue,
			tinhtheobacthang : temp.tinhtheobacthang
	};
	req.getConnection(function(err, connection){
		connection.query('UPDATE mucdichsudung SET ? WHERE mamucdich = ?', [mdsd, mamucdich], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false);
				}
			else
				{
				xoaPhanMucGia(req, mamucdich, function(st){
					if(st ==  true)
						{
						req.session.info = 'Sửa thông tin mục đích sử dụng thành công.';
						return fn(true);
						}
				});
				}
		});
	});
};
function getNhomMDSD(req, fn){
	var re;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM nhommucdichsd', function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(err);
				}
			else
				{
				return fn(rows);
				}
		});
	});
};
function getSumMucDichSD(req, manhom, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM mucdichsudung, phanmucgia WHERE mucdichsudung.mamucdich = phanmucgia.mamucdich AND manhommdsd = ?',[manhom], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(err);
				}
			else
				{
				return fn(rows);
				}
		});
	});
};

exports.getTableGiaDien = function(req, fn){
	getNhomMDSD(req, function(dtNhom){
		if(dtNhom.length > 0)
			{
			var str = '';
			str = str + '<form action="mucdichsudung-sua" method="post">';
			str = str + '<table class="table table-bordered table-hover user-table">' +
							'<thead>' +
							'<tr class="success">' +
								'<th>STT</th>' +
								'<th>Mục đích sử dụng</th>' +
								'<th>Thuế</th>' +
								'<th>Chỉ số đầu</th>' +
								'<th>Chỉ số cuối</th>' +
								'<th>Đơn giá</th>' +
								'<th>Tính theo bậc thang</th>' +
								'<th colspan="2">Thao tác</th>' +
							'</tr>' +
						'</thead>' +
						'<tbody>';
			for(var i = 0; i < dtNhom.length; i++)
			{
				(function(i){
					
				getSumMucDichSD(req, dtNhom[i].manhommdsd, function(dtMucDich){
					str = str + '<tr>' +
					'<td class="left-col-table" colspan="9"><b>' + (i + 1) + ': ' + dtNhom[i].tennhom + '</br></td>'+
				'</tr>';
					if(dtMucDich.length > 0)
						{
						for(var j = 0; j < dtMucDich.length; j++)
							{
							var csd = '';
							if(dtMucDich[j].chisodau == 0)
								{
								csd = '_';
								}
							else
								{
								csd = dtMucDich[j].chisodau;
								}
							var csc = '';
							if(dtMucDich[j].chisocuoi == 0)
								{
								csc = '_';
								}
							else
								{
								csc = dtMucDich[j].chisocuoi;
								}
							var bt = '';
							if(dtMucDich[j].tinhtheobacthang == 0)
								{
								bt = '_';
								}
							else
								{
								bt = '<span class="glyphicon glyphicon-ok"></span>';
								}
							str = str + '<tr class="pop-up-tr" data-mamucdich="' + dtMucDich[j].mamucdich + '">' +
										'<td>' + (j + 1) + '</td>' +
										'<td class="left-col-table">' + dtMucDich[j].mucdich + '</td>' +
										'<td>' + dtMucDich[j].thue + '</td>' +
										'<td>' + csd + '</td>' +
										'<td>' + csc + '</td>' +
										'<td>' + dtMucDich[j].dongiahientai + '</td>' +
										'<td>' + bt + '</td>' +
										'<td><button class="btn2" name="' + dtMucDich[j].mamucdich + '" type="submit"><span class="glyphicon glyphicon-pencil"></span></button>' +
										'</td><td><a data-mamucdich="' + dtMucDich[j].mamucdich + '" class="btnXoaMDSD" href="javascript: void(0)">Xóa</a>' +
										'</td>';
							}
						str = str + '</tr>';
						}
					if(i == (dtNhom.length-1))
						{
						str = str + '</tbody></table>';
						str = str + '</form>';
						return fn(str);
						}
				});
				})(i);
			}
			}
	});
};

exports.getMucDichSuDung = function(req, mamucdich, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM mucdichsudung, phanmucgia WHERE mucdichsudung.mamucdich = phanmucgia.mamucdich AND mucdichsudung.mamucdich = ?', [mamucdich], function(err, rows){
			return fn(rows);
		});
	});
};
function xoaPhanMucGia(req, mamucdich, fn){
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM phanmucgia WHERE mamucdich = ?', [mamucdich], function(err, rows){
			if(!err)
				{
				return fn(true);
				}
		});
	});
};
function xoaMucDichSuDung(req, mamucdich, fn){
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM mucdichsudung WHERE mamucdich = ?', [mamucdich], function(err, rows){
			if(!err)
				{
				return fn(true);
				}
		});
	});
};
function kiemtrarangbuotMDSD(req, mamucdich, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM mucdichsudung, congtodien WHERE mucdichsudung.mamucdich = congtodien.mamucdich AND mucdichsudung.mamucdich = ?',[mamucdich], function(err, rows){
			if(!err)
				{
				if(rows.length > 0)
					{
					return fn(true);
					}
				}
			else
				{
				console.log(err);
				return fn(false);
				}
		});
	});
};