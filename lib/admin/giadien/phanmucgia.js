exports.themgiadien = function(req, fn){
	getMaMucDichMax(req, function(mamd){
		var temp = JSON.parse(JSON.stringify(req.body));
		var giadien = {
			mamucdich : mamd,
			bac : temp.bac,
			chisodau : temp.chisodau,
			chisocuoi : temp.chisocuoi,
			dongiahientai : temp.dongiahientai
		};
		console.log(giadien);
		req.getConnection(function(err, connection){
			connection.query('INSERT INTO phanmucgia SET ?', [giadien], function(err, rows){
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
	});
};
exports.themgiadiensua = function(req, fn){
		var temp = JSON.parse(JSON.stringify(req.body));
		var giadien = {
			mamucdich : temp.mamucdich,
			bac : temp.bac,
			chisodau : temp.chisodau,
			chisocuoi : temp.chisocuoi,
			dongiahientai : temp.dongiahientai
		};
		console.log(giadien);
		req.getConnection(function(err, connection){
			connection.query('INSERT INTO phanmucgia SET ?', [giadien], function(err, rows){
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
function getMaMucDichMax(req, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT MAX(mamucdich) as mamucdich FROM mucdichsudung', function(err, rows){
			if(!err)
				{
				return fn(rows[0].mamucdich);
				}
		});
	});
};