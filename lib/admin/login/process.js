var md5 = require('MD5');
/*fetch the User*/
function checkUser(req, username, password, fn){
req.getConnection(function (err, connection) {
	
	var query = connection.query("SELECT * FROM nhanvien WHERE BINARY manhanvien  = ? AND BINARY matkhau = ? AND trangthai = 1",[username, md5(password)], function(err, rows){
	if (err)
		{
			console.log("Error %s", err);
			fn(false);
		}
	else
		{
			if(rows.length > 0)
				fn(true, rows); 
			else 
				fn(false);
		}
	});
	//in case we want ro print te raw sql
	console.log(query.sql);
	});
};


exports.login = function (req, res, fn) {
	checkUser(req, req.body.username, req.body.password, function(result, rows){
		if(!result)
			{
				return fn(false);
			}
		else
			{
			req.session.regenerate(function(){
				//console.log(rows[0].manhanvien);
				req.session.username_admin = rows[0].manhanvien;
				req.session.hotennv = rows[0].hotennhanvien;
				return fn(true);
			});
			}
	});
};