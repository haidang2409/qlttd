var md5 = require('MD5');
exports.getInfoKhachHang = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM khachhang WHERE makhachhang = ?',[req.session.username], function(err, rows){
			if(err)
				{
				return fn(false, err);
				}
			else
				{
				return fn(true, rows);
				}
		});
	});
};
exports.getGioiThieu = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM gioithieuct', function(err, rows){
			if(!err)
				{
				return fn(rows);
				}
		});
	});
};
exports.getDieuKhoanSuDung = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM dieukhoansudung', function(err, rows){
			if(!err)
				{
				return fn(rows);
				}
		});
	});
};
exports.thongtintba = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM trambienap', function(err, rows){
			if(!err)
				{
				console.log(rows);
				return fn(rows);
				}
			else
				{
				console.log(err);
				}
		});
	});
};
exports.getGiaDienChiTiet =function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('SELECT nhommucdichsd.manhommdsd, tennhom, mucdich, mucdichsudung.mamucdich, thue, bac, chisodau, chisocuoi, dongiahientai, tinhtheobacthang FROM nhommucdichsd, mucdichsudung, phanmucgia WHERE nhommucdichsd.manhommdsd = mucdichsudung.manhommdsd AND mucdichsudung.mamucdich = phanmucgia.mamucdich AND mucdichsudung.mamucdich = ?',[temp.mamucdich], function(err, rows){
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
/////
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
							'</tr>' +
						'</thead>' +
						'<tbody>';
			for(var i = 0; i < dtNhom.length; i++)
			{
				(function(i){
				getSumMucDichSD(req, dtNhom[i].manhommdsd, function(dtMucDich){
					str = str + '<tr>' +
					'<td class="left-col-table" colspan="8"><b>' + (i + 1) + ': ' + dtNhom[i].tennhom + '</b></td>'+
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
							str = str + '<tr class="pop-up-tr-" data-mamucdich="' + dtMucDich[j].mamucdich + '">' +
										'<td>' + (j + 1) + '</td>' +
										'<td class="left-col-table">' + dtMucDich[j].mucdich + '</td>' +
										'<td>' + dtMucDich[j].thue + '</td>' +
										'<td>' + csd + '</td>' +
										'<td>' + csc + '</td>' +
										'<td>' + format1(dtMucDich[j].dongiahientai, "") + '</td>' +
										'<td>' + bt + '</td>';
							}
						str = str + '</tr>';
						}
					if(i == (dtNhom.length-1))
						{
						str = str + '</tbody></table>';
						
						return fn(str);
						}
				});
				})(i);
			}
			}
	});
};
exports.thongtincongtodien =function(req, fn){
	req.getConnection(function(err, connection){
		var sql = 'SELECT ctd.macongto, ctd.chisocot, chisomoinhat, ngayghinhancuoicung, ctd.trangthai, mucdich, tennhom, tinhtheobacthang, tentram ' +
					' FROM congtodien ctd, khachhang kh, mucdichsudung mdsd, nhommucdichsd nhom, trambienap tba ' +
					' WHERE ctd.makhachhang = kh.makhachhang AND ctd.mamucdich = mdsd.mamucdich AND mdsd.manhommdsd = nhom.manhommdsd ' +
					' AND tba.matram = ctd.matram AND kh.makhachhang = ?';
		connection.query(sql,[req.session.username], function(err, rows){
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
exports.updateKhachHang = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	var makh = req.session.username;
	req.getConnection(function(err, connection){
		var khachhang =
		{
			matkhau : md5(temp.matkhau)
		};
		console.log(khachhang);
		connection.query('UPDATE khachhang SET ? WHERE makhachhang = ?', [khachhang, makh], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false);
				}
			else
				{
				return fn(true);
				}
		});
	});
};
function format1(n, currency) {
    return currency + " " + n.toFixed(2).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
};