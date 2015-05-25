exports.getListPhongBan = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query("SELECT maphongban, tenphongban, DATE_FORMAT(ngaythanhlap,'%d/%m/%Y') as ngaythanhlap, trangthai FROM phongban", function(err, rows){
			if(!err)
				{
				return fn(rows);
				}
		});
	});
};
exports.getOnePhongBan = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query("SELECT maphongban, tenphongban, DATE_FORMAT(ngaythanhlap,'%d/%m/%y') as ngaythanhlap, trangthai FROM phongban WHERE maphongban = ?", [temp.maphongban], function(err, rows){
			if(!err)
				{
				return fn(rows);
				}
		});
	});
};
exports.themphongban = function(req, fn){
	temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('INSERT INTO phongban SET ?', [temp], function(err, rows){
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
exports.SuaPhongBan = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query('UPDATE phongban SET ? WHERE maphongban = ?', [phongban, maphongban], function(err, rows){
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
exports.xoaPhongBan = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM phongban WHERE maphongban =  ?', [temp.maphongban], function(err, rows){
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
exports.hienphongban = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('UPDATE PHONGBAN SET trangthai = 1 WHERE maphongban =  ?', [temp.maphongban], function(err, rows){
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
exports.anphongban = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('UPDATE phongban SET trangthai = 0 WHERE maphongban =  ?', [temp.maphongban], function(err, rows){
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
