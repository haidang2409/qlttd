exports.getListHuongDanSuDungKH = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM huongdansudung WHERE idnhom = 1', function(err, rows){
			if(!err)
				{
				return fn(rows);
				}
		});
	});
};
exports.getListHuongDanSuDungNV = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM huongdansudung WHERE idnhom = 2', function(err, rows){
			if(!err)
				{
				return fn(rows);
				}
		});
	});
};
exports.getInfoHuongDanSuDung = function(req, id, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM huongdansudung WHERE id = ?',[id], function(err, rows){
			if(!err)
				{
				return fn(rows);
				}
		});
	});
};