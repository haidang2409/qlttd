exports.getNhomMDSD = function(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM nhommucdichsd',function(err, rows){
			if(!err)
				{
				return fn(rows);
				}
		});
	});
};
exports.themnhommdsd = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	var nhommdsd = {
			tennhom : temp.tennhom,
			trangthai :1
	};
	req.getConnection(function(err, connection){
		connection.query('INSERT INTO nhommucdichsd SET ?',[nhommdsd], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false);
				}
			else
				return fn(true);
		});
	});
};
exports.xoanhommdsd = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM nhommucdichsd WHERE manhommdsd = ?',[temp.manhom], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false);
				}
			else
				return fn(true);
		});
	});
};
exports.hiennhommdsd = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('UPDATE nhommucdichsd SET trangthai = 1 WHERE manhommdsd = ?',[temp.manhom], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false);
				}
			else
				return fn(true);
		});
	});
};
exports.annhommdsd = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('UPDATE nhommucdichsd SET trangthai = 0 WHERE manhommdsd = ?',[temp.manhom], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false);
				}
			else
				return fn(true);
		});
	});
};
exports.get = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function(err, connection){
		connection.query('UPDATE nhommucdichsd SET trangthai = 0 WHERE manhommdsd = ?',[temp.manhom], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false);
				}
			else
				return fn(true);
		});
	});
};