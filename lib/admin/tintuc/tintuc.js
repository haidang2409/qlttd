function countAllTinTuc(req, params, fn){
	req.getConnection(function(err, connection){
		var query = connection.query('SELECT COUNT(matintuc) as all_tintuc FROM tintuc WHERE 1=1 ', function(err, rows){
			if(err)
				{
				return fn(err);
				}
			else
				{
				return fn(rows[0].all_tintuc);
				}
		});
	});
}
function countAllTinTuc_user(req, params, fn){
	req.getConnection(function(err, connection){
		var dk = '';
		if(params.timkiem != '')
			{
			dk = dk + " AND tomtac LIKE '%"+params.timkiem+"%'";
			}
		var query = connection.query('SELECT COUNT(matintuc) as all_tintuc FROM tintuc WHERE 1=1 AND trangthai = 1 ' + dk, function(err, rows){
			if(err)
				{
				return fn(err);
				}
			else
				{
				return fn(rows[0].all_tintuc);
				}
		});
	});
}
exports.listTinTuc = function(req, params, fn){
	req.getConnection(function(err, connection){
		var dk = '';
		if(params.timkiem != '')
			{
			dk = dk + " AND tieude LIKE '%"+params.timkiem+"%' AND tomtac LIKE '%"+params.timkiem+"%'";
			}
		connection.query('SELECT matintuc, tintuc.manhanvien, tieude, tomtac, noidung, anhtieude, cast(ngaydang as char(10)) as ngaydang, tintuc.trangthai, hoten FROM tintuc, nhanvien WHERE 1=1 AND tintuc.manhanvien = nhanvien.manhanvien ' + dk + ' LIMIT ?,?', [params.offset, params.limit], function(err, rows){
			if(err)
			{
			return fn(false, err);
			}
		else
			{
			countAllTinTuc(req, params, function(total){
				return fn(true, rows, total);
			});
			}
		});
	});
};
exports.listTinTuc_user = function(req, params, fn){
	req.getConnection(function(err, connection){
		var dk = '';
		if(params.timkiem != '')
			{
			dk = dk + " AND tomtac LIKE '%"+params.timkiem+"%'";
			}
		connection.query('SELECT matintuc, tintuc.manhanvien, tieude, tomtac, noidung, anhtieude, cast(ngaydang as char(10)) as ngaydang, tintuc.trangthai, hoten FROM tintuc, nhanvien WHERE 1=1 AND tintuc.manhanvien = nhanvien.manhanvien AND tintuc.trangthai = 1 ' + dk + ' order by matintuc DESC LIMIT ?,?', [params.offset, params.limit], function(err, rows){
			if(err)
				{
				return fn(false, err);
				}
			else
				{
				countAllTinTuc_user(req, params, function(total){
					return fn(true, rows, total);
				});
				}
		});
	});
};
exports.listTieuDeTinTuc_user = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT matintuc, tieude, ngaydang, anhtieude FROM tintuc WHERE 1=1 AND tintuc.trangthai = 1 ORDER BY matintuc DESC LIMIT 1,10', function(err, rows){
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
exports.themtintuc = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	var trangthai = 0;
	if(temp.trangthai){
		trangthai=1;
	}
	var tintuc = {
			manhanvien: req.session.username_admin,
			tieude: temp.tieude,
			tomtac: temp.tomtac,
			noidung: temp.noidung,
			ngaydang : getDate(),
			anhtieude: req.files.anhtieude.name,
			trangthai: trangthai
	};
	req.getConnection(function(err, connection){
		connection.query('INSERT INTO tintuc SET ?', [tintuc], function(err, rows){
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
exports.deleteTinTuc = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM tintuc WHERE matintuc = ?', [temp.matt], function(err, rows){
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
exports.anTinTuc = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('UPDATE tintuc SET trangthai = 0 WHERE matintuc = ?', [temp.matt], function(err, rows){
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
exports.hienTinTuc = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	console.log(temp);
	console.log(req.query.matt);
	req.getConnection(function(err, connection){
		connection.query('UPDATE tintuc SET trangthai = 1 WHERE matintuc = ?', [temp.matt], function(err, rows){
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
exports.getInfoTinTuc = function(req, fn){
	var matt = req.query.matt;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM tintuc WHERE matintuc = ?', [matt], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false, err);
				}
			else
				{
				return fn(true, rows);
				}
		});
	});
};
exports.getInfoTinTuc_user = function(req, fn){
	var matt = req.query.matt;
	req.getConnection(function(err, connection){
		connection.query('SELECT matintuc, tintuc.manhanvien, tieude, tomtac, noidung, anhtieude, cast(ngaydang as char(10)) as ngaydang, tintuc.trangthai, hoten FROM tintuc, nhanvien WHERE tintuc.manhanvien = nhanvien.manhanvien AND matintuc = ?', [matt], function(err, rows){
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
function getDate (){
	var date = new Date();
	var result = '';
	result = date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate();
	return result;
};