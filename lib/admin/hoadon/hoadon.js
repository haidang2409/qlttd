
function themHoaDon(req, hoadon, fn){
	req.getConnection(function(req, connection){
		connection.query("INSERT INTO hoadon SET ?",[hoadon], function(err, rows){
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
	});
};
exports.suaHoaDon = function(req, hoadon, mahoadon, fn){
	req.getConnection(function(req, connection){
		connection.query("UPDATE hoadon SET ? WHERE mahoadon = ?",[hoadon, mahoadon], function(err, rows){
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
	});
};
exports.xoaHoaDon = function(req, fn){
	req.getConnection(function(req, fn){
		connection.query("DELETE FROM hoadon WHERE mahoadon = ?",[mahoadon], function(err, rows){
			if(!err)
				{
				return fn(true);
				}
			else
				{
				return fn(false);
				}
		});
	});
};
function AtCrMaHoaDon(req, fn){
	req.getConnection(function(err, connection){
		connection.query("SELECT IFNULL(MAX(mahoadon),'HD00001') as mahoadon FROM hoadon", function(err, rows){
			if(!err)
				{
				var strTemp1 = rows[0].mahoadon;
				var strTemp2 = strTemp1.substring(2,7);
				var intTemp = parseInt(strTemp2);
				intTemp = intTemp + 1;
				if(intTemp >=1 && intTemp < 10){
					return fn('HD0000' + intTemp);
				}
				else
					{
					if(intTemp >= 10 && intTemp < 100)
						{
						return fn('HD000' + intTemp);
						}
					else
						{
						if(intTemp >= 100 && intTemp < 1000)
							{
							return fn('HD00' + intTemp);
							}
						else
							if(intTemp >= 1000 && intTemp < 10000)
								{
								return fn('HD0' + intTemp)
								}
							else
								{
								return fn('HD' + intTemp);
								}
						}
					}
				
				}
		});
	});
};
//Kiem tra tgian tao hoa don
exports.kiemtrathoigiantaohoadon =function(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT MAX(ngayghinhancuoicung) as ngayghinhancuoi FROM congtodien', function(err, rows){
			if(!err)
				{
				var today = new Date();
				var dateLast = rows[0].ngayghinhancuoi;
				console.log(dateLast);
				today.setDate(today.getDate() - 29);
				console.log(today);
				if(today >= dateLast)
					{
					return fn(true);
					}
				else
					{
					return fn(false);
					}
				}
		});
	});
};
exports.taohoadon = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM congtodien WHERE trangthai = 1', function(err, rows){
			if(!err)
				{
				
				for(var i = 0; i < rows.length; i++)
					{
					(function(i){
							getDenNgay(req, function(dn){
								getChiSoCu(req, rows[i].macongto, function(chisocu){
									getThue(req, rows[i].macongto, function(thue){
										getTuNgay(req, function(tn){
											var d = new Date();
											var ngaylap = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
											var hoadon = {
													manhanvien : req.session.username_admin,
													macongto : rows[i].macongto,
													tungay : tn,
													denngay : dn,
													chisomoi : 0,
													chisocu : chisocu,
													chisothucthu : 0,
													thue : thue,
													thuthue : 0,
													thanhtoan : 0,
													tongthanhtoan : 0,
													ngaylap : ngaylap,
													dathanhtoan : 0,
													ngaythanhtoan : ''
											};
											themHoaDon(req, hoadon, function(status){
												if(status == true)
													{
													updateNgayGhiNhanCuoi(req, function(st){
														if(i == (rows.length - 1))
															{
															return fn(true);
															}
													});
													}
											});
										});
									});
								});
							});
					})(i);
					}
				}
		});
	});
};
exports.updateHoaDonThanhTien = function(req, mahoadon,  fn){
	req.getConnection(function(err, connection){
		var sql = 'UPDATE hoadon ' +
				' SET thanhtoan = ( SELECT IFNULL( SUM( chisotieuthutheobac * dongiatheobac ) , 0 ) ' +
					' FROM hoadonchitiet ' +
					' WHERE mahoadon = ?),' +
				' thuthue = ((SELECT IFNULL( SUM( chisotieuthutheobac * dongiatheobac ) , 0 )' +
					' FROM hoadonchitiet ' +
					' WHERE mahoadon = ? ) * ( thue /100 )' +
					' ),' +
				' tongthanhtoan = ( thanhtoan + thuthue )' +
				' WHERE mahoadon = ?';
		connection.query(sql, [mahoadon, mahoadon, mahoadon], function(err, rows){
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
	});
};
function getTuNgay(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT MAX(ngayghinhancuoicung) as ngayghinhancuoi FROM congtodien', function(err, rows){
			if(!err)
				{
				var date = rows[0].ngayghinhancuoi;
				date.setDate(date.getDate() + 1);
				var str =  date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate(); 
				return fn(str);
				}
		});
	});
};
function updateNgayGhiNhanCuoi(req, fn){
	req.getConnection(function(err, connection){
		getDenNgay(req, function(dn){
			connection.query('UPDATE congtodien SET ngayghinhancuoicung = ?',[dn], function(err, rows){
				if(!err)
					return fn(true);
				return fn(false);
			});
		});
	});
}
function getDenNgay(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT MAX(ngayghinhancuoicung) as ngayghinhancuoi FROM congtodien', function(err, rows){
			if(!err)
				{
				var date = rows[0].ngayghinhancuoi;
				date.setDate(date.getDate() + 31);
				return fn(date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate()); 
				}
		});
	});
};
function getChiSoCu(req, macongto, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT chisomoinhat FROM congtodien WHERE macongto = ?',[macongto], function(err, rows){
			if(!err)
				{
				return fn(rows[0].chisomoinhat);
				}
		});
	});
};
function getThue(req, macongto, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT thue FROM mucdichsudung, congtodien WHERE congtodien.mamucdich = mucdichsudung.mamucdich AND macongto = ?',[macongto], function(err, rows){
			if(!err)
				{
				return fn(rows[0].thue);
				}
		});
	});
};

exports.getTableHoaDon = function(req, params, fn){
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
		if(params.mahoadon != '')
			{
			dieukien = dieukien + " AND hd.mahoadon= '" + params.mahoadon + "'";
			}
		if(params.trambienap != '')
			{
			dieukien = dieukien + " AND tba.matram= '" + params.trambienap + "' ";
			}
		if(params.trangthaihd != '')
			{
			dieukien = dieukien + " AND hd.dathanhtoan= '" + params.trangthaihd + "' ";
			}
		if(params.thang != '')
			{
			dieukien = dieukien + " AND MONTH(hd.ngaylap)= '" + params.thang + "' ";
			}
		if(params.nam != '')
			{
			dieukien = dieukien + " AND YEAR(hd.ngaylap)= '" + params.nam + "' ";
			}
		var sql = 'SELECT hd.mahoadon, hd.tungay, hd.denngay, hd.chisomoi, hd.chisocu, hd.chisothucthu,  hd.ngaylap, hd.thue, hd.thuthue, hd.thanhtoan, hd.tongthanhtoan, '+
					' kh.hotenkh, kh.diachi, hd.dathanhtoan, hd.ngaythanhtoan, ' +
					' kh.sodienthoai, ctd.macongto, mdsd.mucdich ' +
					' FROM congtodien ctd, khachhang kh, mucdichsudung mdsd, hoadon hd, trambienap tba ' +
				' WHERE ctd.makhachhang=kh.makhachhang AND ctd.mamucdich=mdsd.mamucdich ' +
				' AND ctd.matram=tba.matram AND hd.macongto=ctd.macongto AND hd.chisomoi > hd.chisocu ';
		connection.query(sql + dieukien + ' ORDER BY hd.mahoadon DESC LIMIT ?,?', [params.offset, params.limit], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false, err);
				}
			else
				{
				countAllHoaDon(req, params, function(total_rows){
					return fn(true, rows, total_rows);
				});
				}
				
		});
	});
};
function countAllHoaDon(req, params, fn){
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
		if(params.mahoadon != '')
			{
			dieukien = dieukien + " AND hd.mahoadon= '" + params.mahoadon + "'";
			}
		if(params.trambienap != '')
			{
			dieukien = dieukien + " AND tba.matram= '" + params.trambienap + "' ";
			}
		if(params.trangthaihd != '')
			{
			dieukien = dieukien + " AND hd.dathanhtoan= '" + params.trangthaihd + "' ";
			}
		if(params.thang != '')
			{
			dieukien = dieukien + " AND MONTH(hd.ngaylap)= '" + params.thang + "' ";
			}
		if(params.nam != '')
			{
			dieukien = dieukien + " AND YEAR(hd.ngaylap)= '" + params.nam + "' ";
			}
		var sql = 'SELECT COUNT(*) as all_hoadon' +
				' FROM congtodien ctd, khachhang kh, mucdichsudung mdsd, hoadon hd, trambienap tba ' +
				' WHERE ctd.makhachhang=kh.makhachhang AND ctd.mamucdich=mdsd.mamucdich ' +
				' AND ctd.matram=tba.matram AND hd.macongto=ctd.macongto AND hd.chisomoi > hd.chisocu ';
		connection.query(sql + dieukien, function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(err);
				}
			else
				{
				return fn(rows[0].all_hoadon);
				}
				
		});
	});
};
exports.getHoaDonChiTiet = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	var sql = 'SELECT hdct.chisotieuthutheobac, hdct.dongiatheobac, (hdct.chisotieuthutheobac * hdct.dongiatheobac) as thanhtientheobac, ' +
				' hd.mahoadon, hd.tungay, hd.denngay, hd.chisomoi, hd.chisocu, hd.chisothucthu,  hd.ngaylap, hd.thue, hd.thuthue, hd.thanhtoan, hd.tongthanhtoan, ' +
				' kh.hotenkh, kh.diachi, ' +
				' kh.sodienthoai, ctd.macongto, mdsd.mucdich, ' +
				' nhommdsd.tennhom ' +
				' FROM congtodien ctd, khachhang kh, mucdichsudung mdsd, hoadon hd, trambienap tba, nhommucdichsd nhommdsd, hoadonchitiet hdct ' +
				' WHERE ctd.makhachhang=kh.makhachhang AND ctd.mamucdich=mdsd.mamucdich ' +
				' AND ctd.matram=tba.matram AND hd.macongto=ctd.macongto AND nhommdsd.manhommdsd = mdsd.manhommdsd ' +
				' AND hd.mahoadon = hdct.mahoadon AND hd.chisomoi > hd.chisocu AND hd.mahoadon = ? ';
	req.getConnection(function(err, connection){
		connection.query(sql, [temp.mahoadon], function(err, rows){
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
exports.getTableHoaDonExport = function(req, params, fn){
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
		if(params.mahoadon != '')
			{
			dieukien = dieukien + " AND hd.mahoadon= '" + params.mahoadon + "'";
			}
		if(params.trambienap != '')
			{
			dieukien = dieukien + " AND tba.matram= '" + params.trambienap + "' ";
			}
		if(params.trangthaihd != '')
			{
			dieukien = dieukien + " AND hd.dathanhtoan= '" + params.trangthaihd + "' ";
			}
		if(params.thang != '')
			{
			dieukien = dieukien + " AND MONTH(hd.ngaylap)= '" + params.thang + "' ";
			}
		if(params.nam != '')
			{
			dieukien = dieukien + " AND YEAR(hd.ngaylap)= '" + params.nam + "' ";
			}
		var sql = 'SELECT hd.mahoadon, hd.tungay, hd.denngay, hd.chisomoi, hd.chisocu, hd.chisothucthu,  hd.ngaylap, hd.thue, hd.thuthue, hd.thanhtoan, hd.tongthanhtoan, '+
					' kh.hotenkh, kh.diachi, hd.dathanhtoan, hd.ngaythanhtoan, ' +
					' kh.sodienthoai, ctd.macongto, mdsd.mucdich ' +
					' FROM congtodien ctd, khachhang kh, mucdichsudung mdsd, hoadon hd, trambienap tba ' +
				' WHERE ctd.makhachhang=kh.makhachhang AND ctd.mamucdich=mdsd.mamucdich ' +
				' AND ctd.matram=tba.matram AND hd.macongto=ctd.macongto AND hd.chisomoi > hd.chisocu ';
		connection.query(sql + dieukien + ' ORDER BY hd.mahoadon DESC', function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false, err);
				}
			else
				{
				console.log(params);
				console.log(rows);
				return fn(true, rows);
				}
				
		});
	});
};