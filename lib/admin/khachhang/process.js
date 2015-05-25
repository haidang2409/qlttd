var md5 = require('MD5');
//Danh sach khach hang
exports.getListKhachHang = function(req, params, fn){
	req.getConnection(function(err, connection){
		var dk = '';
		if(req.params.timkiem != '')
			{
			dk = dk + " AND makhachhang LIKE '%"+params.timkiem+"%' OR hotenkh LIKE '%"+params.timkiem+"%'";
			}
		var query = connection.query('SELECT * FROM khachhang WHERE 1=1 ' + dk + ' ORDER BY makhachhang DESC LIMIT ?,?', [params.offset, params.limit], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false, err);
				}
			else
				{
				console.log(dk);
				countAllKhachHang(req, params, function(total){
					return fn(true, rows, total);
				});
				}
		});
	});
};
//Dem khach hang
function countAllKhachHang(req, params, fn){
	req.getConnection(function(err, connection){
		var dk = '';
		if(req.params.timkiem != '')
			{
			dk = dk + " AND makhachhang LIKE '%"+params.timkiem+"%' OR hotenkh LIKE '%"+params.timkiem+"%'";
			}
		var query = connection.query('SELECT COUNT(makhachhang) as all_khachhang FROM khachhang WHERE 1=1 ' + dk, function(err, rows){
			if(err)
				{
				return fn(err);
				}
			else
				{
				return fn(rows[0].all_khachhang);
				}
		});
	});
}
//Insert khach hang
exports.khachhangthem = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		var khachhang =
		{
			makhachhang : temp.makhachhang,
			hotenkh : temp.hotenkh,
			gioitinh : temp.gioitinh,
			ngaysinh : temp.ngaysinh,
			diachi : temp.diachi,
			sodienthoai : temp.sodienthoai,
			matkhau : md5(temp.makhachhang),
			trangthai : 1
		};
		console.log(khachhang);
		connection.query('INSERT INTO khachhang SET ? ', khachhang, function(err, rows){
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
//Xoa khach hang
exports.deleteKhachHang = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM khachhang WHERE makhachhang = ?',[temp.makhachhang], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false, err);
				}
			else
				{
				return fn(true, 'Khách hàng đã được xóa.');
				}
		});
	});
};
exports.kiemtrarangbuotKhachHang = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM khachhang, congtodien WHERE khachhang.makhachhang = congtodien.makhachhang and congtodien.makhachhang = ?',[temp.makhachhang], function(err, rows){
			if(rows.length > 0)
				return fn(true);
			return fn(false);
		});
	});
};
//
exports.getInfoCustomer = function(req, makh, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM khachhang WHERE makhachhang = ?',[makh], function(err, rows){
			if(rows.length > 0)
				return fn(rows);
		});
	});
};
//
exports.kiemtratontaiKhachHang = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM khachhang WHERE makhachhang = ?',[temp.makhachhang], function(err, rows){
			if(rows.length > 0)
				return fn(true);
			return fn(false);
		});
	});
};
exports.updateKhachHang = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	var makh = temp.makhachhang;
	req.getConnection(function(err, connection){
		var khachhang =
		{
			hotenkh : temp.hotenkh,
			gioitinh : temp.gioitinh,
			ngaysinh : temp.ngaysinh,
			diachi : temp.diachi,
			sodienthoai : temp.sodienthoai,
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
exports.AtCrMaKhachHang = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query("SELECT IFNULL(MAX(makhachhang),'KH00001') as makhachhang FROM khachhang", function(err, rows){
			if(!err)
				{
				var strTemp1 = rows[0].makhachhang;
				var strTemp2 = strTemp1.substring(2,7);
				var intTemp = parseInt(strTemp2);
				intTemp = intTemp + 1;
				if(intTemp >=1 && intTemp < 10){
					return fn('KH0000' + intTemp);
				}
				else
					{
					if(intTemp >= 10 && intTemp < 100)
						{
						return fn('KH000' + intTemp);
						}
					else
						{
						if(intTemp >= 100 && intTemp < 1000)
							{
							return fn('KH00' + intTemp);
							}
						else
							if(intTemp >= 1000 && intTemp < 10000)
								{
								return fn('KH0' + intTemp);
								}
							else
								{
								return fn('KH' + intTemp);
								}
						}
					}
				}
		});
	});
};