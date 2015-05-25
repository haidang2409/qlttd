exports.getNgay= function(req, fn){
	req.getConnection(function(err, connection){
		connection.query("SELECT ngaythanhlap FROM phongban where maphongban = 1", function(err, rows){
			if(!err)
				{
				return fn(rows);
				}
		});
	});
};