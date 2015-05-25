exports.getQuyenSuDung = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM quyensudung', function(err, rows){
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
exports.themphanquyen = function(req, fn){
	var phanquyen = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('INSERT INTO phanquyen set ?', [phanquyen], function(err, rows){
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
exports.xoaphanquyen = function(req, manv, fn){
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM phanquyen WHERE manhanvien = ?', [manv], function(err, rows){
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