var md5 = require('MD5');
exports.ListNhanVien = function(req, fn){
	req.getConnection(function(err, connection){
		var dieukien = '';
		connection.query('SELECT * FROM nhanvien, phongban WHERE nhanvien.maphongban = phongban.maphongban ORDER BY manhanvien DESC' + dieukien,[], function(err, rows){
			if(!err)
				{
				return fn(rows);
				}
		});
	});
};
//
exports.thongtinnhanvien = function(req, fn){
	req.getConnection(function(err, connection){
		var sql = "SELECT * FROM nhanvien, phongban WHERE nhanvien.maphongban = phongban.maphongban AND manhanvien = ?";
		connection.query(sql, [req.session.username_admin], function(err, rows){
			if(err)
				{
				console.log(err);
				}
			else
				{
				return fn(rows);
				}
		});
	});
};
exports.getInfoNhanVien = function(req, manv, fn){
	req.getConnection(function(err, connection){
		connection.query("SELECT * FROM nhanvien WHERE manhanvien = ?", [manv], function(err, rows){
			if(err)
				{
				console.log(err);
				}
			else
				{
				return fn(rows);
				}
		});
	});
};
exports.listQuyenNhanVien = function(req, manv, fn){
	req.getConnection(function(err, connection){
		connection.query("SELECT * FROM phanquyen WHERE manhanvien = ?", [manv], function(err, rows){
			if(err)
				{
				console.log(err);
				}
			else
				{
				return fn(rows);
				}
		});
	});
};
exports.themnhanvien = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		var nhanvien = {
			manhanvien : temp.manhanvien,
			maphongban : temp.maphongban,
			hoten : temp.hoten,
			ngaysinh : temp.ngaysinh,
			gioitinh : temp.gioitinh,
			diachi : temp.diachi,
			sodienthoai : temp.sodienthoai,
			email : temp.email,
			matkhau : md5(temp.matkhau),
			trangthai : 1
		};
		console.log(nhanvien);
		connection.query('INSERT INTO nhanvien SET ? ', [nhanvien], function(err, rows){
			if(err)
				{
				return fn(false);
				}
			else
				{
				req.session.info = 'Thêm nhân viên thành công';
				return fn(true);
				}
		});
	});
};
exports.suanhanvien = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		var nhanvien = {
			maphongban : temp.maphongban,
			hoten : temp.hoten,
			ngaysinh : temp.ngaysinh,
			gioitinh : temp.gioitinh,
			diachi : temp.diachi,
			sodienthoai : temp.sodienthoai,
			email : temp.email,
			matkhau : md5(temp.matkhau),
			trangthai : 1
		};
		console.log(nhanvien);
		connection.query('UPDATE nhanvien SET ? WHERE manhanvien = ?', [nhanvien, temp.manhanvien], function(err, rows){
			if(err)
				{
				return fn(false);
				}
			else
				{
				req.session.info = 'Sửa thông tin nhân viên thành công';
				return fn(true);
				}
		});
	});
};
exports.kiemtrarangbuocnhanvien = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM nhanvien, hoadon WHERE nhanvien.manhanvien = hoadon.manhanvien AND nhanvien.manhanvien = ?', [temp.manhanvien], function(err, rows){
			if(err)
				{
				console.log(err);
				}
			else
				{
				if(rows.length > 0)
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
exports.xoanhanvien = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM phanquyen WHERE manhanvien = ? ', [temp.manhanvien], function(err, rows){
			if(err)
				{
				console.log(err);
				}
			else
				{
				connection.query('DELETE FROM nhanvien WHERE manhanvien = ? ', [temp.manhanvien], function(err, rows){
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
				}
		});
	});
};
exports.AtCrMaNhanVien = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query("SELECT IFNULL(MAX(manhanvien),'NV0001') as manhanvien FROM nhanvien", function(err, rows){
			if(!err)
				{
				var strTemp1 = rows[0].manhanvien;
				var strTemp2 = strTemp1.substring(2,6);
				var intTemp = parseInt(strTemp2);
				intTemp = intTemp + 1;
				if(intTemp >=1 && intTemp < 10){
					return fn('NV000' + intTemp);
				}
				else
					{
					if(intTemp >= 10 && intTemp < 100)
						{
						return fn('NV00' + intTemp);
						}
					else
						{
						if(intTemp >= 100 && intTemp < 1000)
							{
							return fn('NV0' + intTemp);
							}
						else
							return fn('NV' + intTemp);
						}
					}
				
				}
		});
	});
};