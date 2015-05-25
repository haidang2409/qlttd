exports.getListYKienPhanHoi = function(req, params, fn){
	req.getConnection(function(err, connection){
		var sql = "SELECT * FROM ykienphanhoi left outer join nhanvien on nhanvien.manhanvien = ykienphanhoi.nhanvientl, khachhang ";
		sql = sql + " WHERE khachhang.makhachhang = ykienphanhoi.makhachhang ";
		sql = sql + " ORDER BY maykien DESC LIMIT ?,?";
		console.log(sql);
		var query = connection.query(sql, [params.offset, params.limit], function(err, rows){
			if(err)
				{
				return fn(false, err);
				}
			else
				{
				countAllYKienPhanHoi(req, function(total){
					return fn(true, rows, total);
				});
				}
		});
	});
};
function countAllYKienPhanHoi(req, fn){
	req.getConnection(function(err, connection){
		var query = connection.query('SELECT COUNT(maykien) as all_ykien FROM ykienphanhoi', function(err, rows){
			if(err)
				{
				return fn(err);
				}
			else
				{
				return fn(rows[0].all_ykien);
				}
		});
	});
}
//Insert khach hang
exports.ykienthem = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		var ykien =
		{
			makhachhang: req.session.username,
			noidung: temp.noidung,
			ngaydang: temp.ngaydang,
			datraloi: 0,
			trangthai: 1
		};
		console.log(ykien);
		connection.query('INSERT INTO ykienphanhoi SET ? ', ykien, function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false);
				}
			else
				{
				req.session.info = 'Gửi ý kiến thành công';
				return fn(true);
				}
		});
	});
};
//Xoa khach hang
exports.deleteYKienPhanHoi = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM ykienphanhoi WHERE maykien = ?',[temp.maykien], function(err, rows){
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

//

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
