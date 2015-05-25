exports.listCongToDien = function(req, params, fn){
	req.getConnection(function(err, connection){
		var dieukien = '';
		if(params.macongto  != '')
			{
			dieukien = dieukien + " AND ctd.macongto= '" + params.macongto + "'";
			}
		if(params.hotenkh != '')
			{
			dieukien = dieukien + " AND kh.hotenkh LIKE '%" + params.hotenkh + "%' ";
			}
		if(params.trambienap != '')
			{
			dieukien = dieukien + " AND tba.matram= '" + params.trambienap + "' ";
			}
		if(params.trangthai != '')
			{
			dieukien = dieukien + " AND ctd.trangthai= '" + params.trangthai + "' ";
			}
		var strQuery = ' SELECT ctd.macongto, ctd.chisocot, ctd.chisomoinhat, kh.hotenkh, mucdich, tennhom, tentram, ctd.trangthai ' +
						' FROM congtodien ctd, khachhang kh, trambienap tba, nhommucdichsd nhom, mucdichsudung mdsd ' +
						' WHERE kh.makhachhang = ctd.makhachhang AND ctd.matram = tba.matram AND ctd.mamucdich = mdsd.mamucdich AND nhom.manhommdsd = mdsd.manhommdsd ';
		connection.query(strQuery + dieukien + ' ORDER BY macongto DESC LIMIT ?,? ',[params.offset, params.limit], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false, err);
				}
			else
				{
				countAllCongToDien(req, params, function(total){
					return fn(true, rows, total);
				});
				}
		});
	});
};
//
function countAllCongToDien(req, params, fn){
	var dieukien = '';
	if(params.macongto  != '')
		{
		dieukien = dieukien + " AND ctd.macongto= '" + params.macongto + "'";
		}
	if(params.hotenkh != '')
		{
		dieukien = dieukien + " AND kh.hotenkh LIKE '%" + params.hotenkh + "%' ";
		}
	if(params.trambienap != '')
		{
		dieukien = dieukien + " AND tba.matram= '" + params.trambienap + "' ";
		}
	if(params.trangthai != '')
		{
		dieukien = dieukien + " AND ctd.trangthai= '" + params.trangthai + "' ";
		}
	req.getConnection(function(err, connection){
		var strQuery = ' SELECT count(ctd.macongto) as all_macongto ' +
						' FROM congtodien ctd, khachhang kh, trambienap tba, nhommucdichsd nhom, mucdichsudung mdsd ' +
						' WHERE kh.makhachhang = ctd.makhachhang AND ctd.matram = tba.matram AND ctd.mamucdich = mdsd.mamucdich AND nhom.manhommdsd = mdsd.manhommdsd ';
		var query = connection.query(strQuery + dieukien, function(err, rows){
			if(err)
				{
				return fn(err);
				}
			else
				{
				return fn(rows[0].all_macongto);
				}
		});
	});
}

exports.congtodiensua = function(req, congtodien, macongto, fn){
	req.getConnection(function(err, connection){
		connection.query('UPDATE congtodien SET ? WHERE macongto = ?', [congtodien, macongto], function(err, rows){
			if(!err)
				{
				return fn(true);
				}
			else
				{
				console.log(err);
				return fn(false);
				}
		});
	})
}
exports.xoaCongToDien = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM congtodien WHERE macongto = ?', [temp.macongto], function(err, rows){
			if(err)
				{
				return fn(false);
				}
			else
				{
				return fn(true);
				}
		});
	});
};
exports.kiemtrarangbuotCongToDien = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM congtodien, hoadon WHERE congtodien.macongto = hoadon.macongto AND hoadon.macongto = ?',[temp.macongto], function(err, rows){
			if(rows.length > 0)
				return fn(true);
			return fn(false);
		});
	});
};
exports.anCongToDien = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('UPDATE congtodien SET trangthai = 0 WHERE macongto = ?', [temp.macongto], function(err, rows){
			if(err)
				{
				return fn(false);
				}
			else
				{
				return fn(true);
				}
		});
	});
};
exports.hienCongToDien = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('UPDATE congtodien SET trangthai = 1 WHERE macongto = ?', [temp.macongto], function(err, rows){
			if(err)
				{
				return fn(false);
				}
			else
				{
				return fn(true);
				}
		});
	});
};
exports.getMucDich = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM nhommucdichsd, mucdichsudung WHERE nhommucdichsd.manhommdsd = mucdichsudung.manhommdsd', function(err, rows){
			if(!err)
				{
				return fn(rows);
				}
		});
	});
};
function getNgayGhiNhanCuoi(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT MAX(ngayghinhancuoicung) as ngay FROM congtodien', function(err, rows){
			if(!err)
				{
				var d = new Date(rows[0].ngay);
				var str = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + (d.getDate());
				return fn(str);
				}
		});
	});
};
exports.congtodienthem = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	var ngayghinhancuoi;
	getNgayGhiNhanCuoi(req, function(ngay){
		var congtodien = {
				macongto : temp.macongto,
				matram : temp.matram,
				mamucdich : temp.mamucdich,
				makhachhang : temp.makhachhang,
				chisocot : temp.chisocot,
				chisomoinhat: temp.chisomoinhat,
				ngayghinhancuoicung : ngay,
				trangthai : 1
			};
			req.getConnection(function(err, connection){
				connection.query('INSERT INTO congtodien SET  ?',[congtodien], function(err, rows){
					if(err)
						{
						console.log(err);
						return fn(false);
						}
					else
						{
						req.session.info = 'Thêm công tơ điện thành công.';
						return fn(true);
						}
				});
			});
	});

};
exports.AtCrMaCongToDien = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query("SELECT IFNULL(MAX(macongto),'CTD00001') as macongto FROM congtodien", function(err, rows){
			if(!err)
				{
				var strTemp1 = rows[0].macongto;
				var strTemp2 = strTemp1.substring(3,8);
				var intTemp = parseInt(strTemp2);
				intTemp = intTemp + 1;
				if(intTemp >=1 && intTemp < 10){
					return fn('CTD0000' + intTemp);
				}
			else
				{
				if(intTemp >= 10 && intTemp < 100)
					{
					return fn('CTD000' + intTemp);
					}
				else
					{
					if(intTemp >= 100 && intTemp < 1000)
						{
						return fn('CTD00' + intTemp);
						}
					else
						{
						if(intTemp >=1000 && intTemp < 10000)
							{
							return fn('CTD0' + intTemp);
							}
						else
							{
							return fn('CTD' + intTemp);
							}
						}
					}
				}
			}
		});
	});
};
exports.getCongToDien = function(req, macongto, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM congtodien WHERE macongto = ?',[macongto], function(err, rows){
			if(rows.length > 0)
				return fn(rows);
		});
	});
};
exports.congtodiensua2 = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	var macongto = temp.macongto;
		var congtodien = {
				matram : temp.matram,
				mamucdich : temp.mamucdich,
				chisocot : temp.chisocot,
				chisomoinhat: temp.chisomoinhat,
			};
			req.getConnection(function(err, connection){
				connection.query('UPDATE congtodien SET ? WHERE macongto = ?',[congtodien, macongto], function(err, rows){
					if(err)
						{
						console.log(err);
						return fn(false);
						}
					else
						{
						req.session.info = 'Sửa thông tin công tơ điện thành công.';
						return fn(true);
						}
				});
			});
};