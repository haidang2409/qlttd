
exports.getTableHoaDon = function(req, params, fn){
	req.getConnection(function(err, connection){
		var dieukien = '';
		if(params.macongto  != '')
			{
			dieukien = dieukien + " AND ctd.macongto= '" + params.macongto + "'";
			}
		if(params.mahoadon != '')
			{
			dieukien = dieukien + " AND hd.mahoadon= '" + params.mahoadon + "'";
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
					' kh.hotenkh, kh.diachi, kh.gioitinh, kh.ngaysinh, kh.makhachhang, hd.dathanhtoan, hd.ngaythanhtoan, ' +
					' kh.sodienthoai, ctd.macongto, mdsd.mucdich ' +
					' FROM congtodien ctd, khachhang kh, mucdichsudung mdsd, hoadon hd, trambienap tba ' +
				' WHERE ctd.makhachhang=kh.makhachhang AND ctd.mamucdich=mdsd.mamucdich ' +
				' AND ctd.matram=tba.matram AND hd.macongto=ctd.macongto AND hd.chisomoi > hd.chisocu AND kh.makhachhang = ? ';
		connection.query(sql + dieukien + ' ORDER BY hd.mahoadon DESC LIMIT ?,?', [req.session.username, params.offset, params.limit], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false, err);
				}
			else
				{
				console.log(sql + dieukien + ' LIMIT ' + params.offset + ',' + params.limit);
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
		if(params.mahoadon != '')
			{
			dieukien = dieukien + " AND hd.mahoadon= '" + params.mahoadon + "'";
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
				' AND ctd.matram=tba.matram AND hd.macongto=ctd.macongto AND hd.chisomoi > hd.chisocu AND kh.makhachhang = ? ';
		connection.query(sql + dieukien,[req.session.username], function(err, rows){
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
				' hd.mahoadon, hd.tungay, hd.denngay, hd.chisomoi, hd.chisocu, hd.chisothucthu,  hd.ngaylap, hd.thue, hd.thuthue, hd.thanhtoan, hd.tongthanhtoan, hd.dathanhtoan, ' +
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
exports.inhoadon = function(req, mahoadon, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	var sql = 'SELECT hdct.chisotieuthutheobac, hdct.dongiatheobac, (hdct.chisotieuthutheobac * hdct.dongiatheobac) as thanhtientheobac, ' +
				' hd.mahoadon, hd.tungay, hd.denngay, hd.chisomoi, hd.chisocu, hd.chisothucthu,  hd.ngaylap, hd.thue, hd.thuthue, hd.thanhtoan, hd.tongthanhtoan, hd.dathanhtoan, hd.ngaythanhtoan, ' +
				' kh.hotenkh, kh.diachi, ' +
				' kh.sodienthoai, ctd.macongto, mdsd.mucdich, ' +
				' nhommdsd.tennhom ' +
				' FROM congtodien ctd, khachhang kh, mucdichsudung mdsd, hoadon hd, trambienap tba, nhommucdichsd nhommdsd, hoadonchitiet hdct ' +
				' WHERE ctd.makhachhang=kh.makhachhang AND ctd.mamucdich=mdsd.mamucdich ' +
				' AND ctd.matram=tba.matram AND hd.macongto=ctd.macongto AND nhommdsd.manhommdsd = mdsd.manhommdsd ' +
				' AND hd.mahoadon = hdct.mahoadon AND hd.chisomoi > hd.chisocu AND hd.mahoadon = ? ';
	console.log(sql);
	req.getConnection(function(err, connection){
		connection.query(sql, [mahoadon], function(err, rows){
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
exports.getDSHoaDon = function(req, arrHD, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	var arrHD = temp.chkChonHoaDon;
	var sql = 'SELECT hd.mahoadon, hd.tungay, hd.denngay, hd.chisomoi, hd.chisocu, hd.chisothucthu,  hd.ngaylap, hd.thue, hd.thuthue, hd.thanhtoan, hd.tongthanhtoan, hd.dathanhtoan, hd.ngaythanhtoan,  kh.hotenkh, kh.diachi,  kh.sodienthoai, ctd.macongto, mdsd.mucdich,  nhommdsd.tennhom ' +
				' FROM congtodien ctd, khachhang kh, mucdichsudung mdsd, hoadon hd, trambienap tba, nhommucdichsd nhommdsd ' +
				' WHERE ctd.makhachhang=kh.makhachhang AND ctd.mamucdich=mdsd.mamucdich  AND ctd.matram=tba.matram AND hd.macongto=ctd.macongto AND nhommdsd.manhommdsd = mdsd.manhommdsd  AND hd.chisomoi > hd.chisocu AND hd.mahoadon in (' + arrHD + ')';
	req.getConnection(function(err, connection){
		connection.query(sql, function(err, rows){
			if(rows.length > 0)
				{
				var str = '';
				for(var i = 0; i < rows.length; i++)
				{
					(function(i){
					getHDCT(req, rows[i].mahoadon, function(hdct){
						console.log(rows[i].mahoadon);
						str = str + '<br><div id="div-hoadonct" align="center">' +
						'<table align="center">' +
							'<tr>' +
								'<td align="center">' +
									'<img src="./images/logo-hoadon.png" align="middle" width="150" height="70">' +
								'</td>' +
								'<td align="center">' +
									'<font size="4" color="blue"><b>HÓA ĐƠN GTGT (TIỀN ĐIỆN)</b></font>' +
									'<br>' +
									'<i>Liên 2: Giao khách hàng</i>' +
									'<br>' +
									'<font color="#208AB4">Từ ngày: </font> ' + getDate(rows[i].tungay) + ' &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
									'<font color="#208AB4">Đến ngày: </font>' + getDate(rows[i].denngay) +
								'</td>' +
								'<td width="200px" align="left">' +
									'&nbsp;&nbsp;&nbsp; Mẫu số: 01GTKT2/001' +
									'<br>' +
									'&nbsp;&nbsp;&nbsp; Ký hiệu: AA/14T' +
									'</td>' +
							'</tr>' +
							'<tr>' +
								'<td colspan="3">' +
									'<font color="#208AB4"><b>Công ty điện lực TP Cần Thơ</b></font><font color="#208AB4">- Chi nhánh điện lực Phường An Hòa</font>' +
									'<br>' +
									'<font color="#208AB4">Địa chỉ: </font>Số 01, Phường An Hòa TP Cần Thơ' +
								'</td>' +
							'</tr>' +
							'<tr>' +
								'<td colspan="2">' +
									'<font color="#208AB4">Họ tên khách hàng: &nbsp;&nbsp;&nbsp;</font>' + rows[i].hotenkh +
									'<br>' +
									'<font color="#208AB4">Địa chỉ khách hàng: &nbsp;&nbsp;&nbsp;</font>' + rows[i].diachi +
									'<br>' +
									'<font color="#208AB4">Số điện thoại: &nbsp;&nbsp;&nbsp;</font>' + rows[i].sodienthoai +
								'</td>' +
								'<td>' +
									'<br>' +
									'<br>' +
									'<font color="#208AB4">Mã công tơ: &nbsp;&nbsp;&nbsp;</font>' + rows[i].macongto +
								'</td>' +
							'</tr>' +
						'</table>' +
						'<hr>' +
						'<div id="divhd2"><table>' +
							'<tr>' +
								'<td width="350">' +
									'<font color="#208AB4">Mã hóa đơn: &nbsp;</font>' + rows[i].mahoadon + '<br>' +
									'<font color="#208AB4">Mục đích sử dụng: &nbsp;</font>' + rows[i].tennhom + ' - ' + rows[i].mucdich + '<br>' +
									'<font color="#208AB4">Chỉ số mới: &nbsp;</font>' + rows[i].chisomoi + '<br>' +
									'<font color="#208AB4">Chỉ số cũ: &nbsp;</font>' + rows[i].chisocu + '<br>' +
									'<font color="#208AB4">Điện năng TT: &nbsp;</font>' + rows[i].chisothucthu + ' = ' + format1(rows[i].thanhtoan,"") + ' đồng<br>' +
									'<font color="#208AB4">Thuế &nbsp;</font>' + rows[i].thue + '% = &nbsp;' + format1(rows[i].thuthue,"") + ' đồng<br>' +
									'<font color="#208AB4">Tổng thanh toán: &nbsp;</font>' + format1(rows[i].tongthanhtoan,"") + '<br>' +
								'</td>' +
								'<td align="center" width="300">' +
									'Chi tiết giá điện<br>' +
									'<table border="1" id="table-hdct" style="padding: 5px; border: 1px solid #C8C2B9; border-collapse: collapse;">' +
										'<tr bgcolor="#9FC1F5">' +
											'<td style="padding: 5px;">' +
												'Điện năng tt' +
											'</td>' +
											'<td style="padding: 5px;">' +
												'Đơn giá' +
											'</td>' +
											'<td style="padding: 5px;">' +
												'Thành tiền' +
											'</td>' +
										'</tr>';
						if(hdct.length > 0)
							{
							for(var j = 0; j < hdct.length; j++)
								{
								(function(j){
									str = str + '<tr>' +
													'<td align="center" style="padding: 5px;">' + hdct[j].chisotieuthutheobac + '</td>' +
													'<td align="center" style="padding: 5px;">' + hdct[j].dongiatheobac + '</td>' +
													'<td align="center" style="padding: 5px;">' + format1(hdct[j].chisotieuthutheobac * hdct[j].dongiatheobac,"") + '</td>' +
												'</tr>';
								})(j);	
								}
						str = str + '</table>' +
										'</td>' +
									'</tr>' +
							'</table></div>' +
							'<hr>' +
							'<table>' +
								'<tr>' +
									'<td width="350">' +
										'<font color="#208AB4">Ngày lập: &nbsp;</font>' + getDate(rows[i].ngaylap) + '<br>' +
										'<font color="#208AB4">Ngày thanh toán: &nbsp;</font>' + getDate(rows[i].ngaythanhtoan) + 
									'</td>' +
									'<td  align="center">' +
										'<font color="#208AB4">Nhân viên</font><br>Nguyễn Hải Đăng' +
									'</td>' +
								'</tr>' +
							'</table>' +
							'<br><br>' +
						'</div>';
						}
						if(i == (rows.length - 1))
							{
							console.log(str);
							return fn(str);
							}
					});
					})(i);
				}
				}
		});
	});
};
function getHDCT(req, mahoadon, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM hoadonchitiet WHERE mahoadon = ?',[mahoadon], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false);
				}
			else
				{
				return fn(rows);
				}
		});
	});
}
function getDate(strDate)
{
	var date = new Date(strDate);
	var str = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
	return str;
};
function format1(n, currency) {
    return currency + " " + n.toFixed(2).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
};