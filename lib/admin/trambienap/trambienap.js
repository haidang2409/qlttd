exports.getListTramBienAp = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query("SELECT * FROM trambienap", function(err, rows){
			if(!err)
				{
				return fn(rows);
				}
		});
	});
};