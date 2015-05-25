/*fetch the User*/
var md5 = require('MD5');
function checkUser(req, username, password, fn){
	req.getConnection(function (err, connection) {
		var query = connection.query("SELECT * FROM khachhang WHERE BINARY makhachhang  = ? AND BINARY matkhau = ? AND trangthai = 1",[username, md5(password)], function(err, rows, fields){
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
exports.kiemtramatkhau = function(req, fn){
	var temp = JSON.parse(JSON.stringify(req.body));
	req.getConnection(function (err, connection) {
		var query = connection.query("SELECT * FROM khachhang WHERE BINARY makhachhang  = ? AND BINARY matkhau = ? AND trangthai = 1",[req.session.username, md5(temp.matkhau)], function(err, rows){
		if (err)
			{
				console.log("Error %s", err);
				fn(false);
			}
		else
			{
				console.log(rows);
				if(rows.length > 0)
					fn(true); 
				else 
					fn(false);
			}
		});
		});
};


exports.login = function (req, res, fn) {
	if(req.cookies.username && req.cookies.password)
		{
		checkUser(req, req.cookies.username, req.cookies.password, function(result, rows){
			if(result)
				{
				req.session.username = rows[0].makhachhang;
				req.session.hotenkh = rows[0].hotenkh;
				return fn(true);
				}
		});
		}
		checkUser(req, req.body.username, req.body.password, function(result, rows){
			if(!result)
				{
					return fn(false);
				}
			else
				{
				req.session.regenerate(function(){
					req.session.username = rows[0].makhachhang;
					req.session.hotenkh = rows[0].hotenkh;
					if(req.body.remember)
						{
							res.cookie('username', req.body.username, { maxAge: 3600*24*7});
							res.cookie('password', req.body.password, { maxAge: 3600*24*7});
						}
					return fn(true);
				});
				}
			});
};


/*------------------------------------------
SEEDING is importan to put a First user 
along with the password and username
------------------------------------------*/

exports.seeding = function(req,hash,fn){
    
    /*----------------------------------------------
        Set it in Global like this,so it can be accessed
        inside the callback function below
     ------------------------------------------------*/
    var users = {
      tj: { username: 'admin' }  // set username
    };
    
    //set password = ganjar
    hash('admin', function(err, salt, hash){
    
        if (err) throw err;
         
         
         users.tj.salt = salt;
         users.tj.hash = hash;
      
         /*Seeding db*/
         req.getConnection(function (err, connection) {
      
            var exape = {username:users.tj.username,password_salt:users.tj.salt,password_hash:users.tj.hash};
            connection.query("INSERT INTO t_user set ? ",exape, function(err, rows){
      
	          if (err) {
	            
	          	  return fn(false,err); 
	          	   
	          }else{
	          	
	          	  return fn(true," Seeding's done");
	          }

	        });
        });

    }); //end of hash
      
};