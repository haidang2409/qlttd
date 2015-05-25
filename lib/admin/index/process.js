exports.getDieuKhoanSuDung = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM dieukhoansudung', function(err, rows){
			if(!err)
				{
				return fn(rows);
				}
		});
	});
};