function themHoaDonChiTiet(req,hoadonchitiet, fn){
	req.getConnection(function(req, connection){
		connection.query("INSERT INTO hoadonchitiet SET ?",[hoadonchitiet], function(err, rows){
			if(!err)
				{
				return fn(true);
				}
			else
				{
				console.log(err);
				return fn(false);
				}
		});
	});
};
exports.themGiaBacThang = function(req, chisotieuthu, mahoadon, mamucdich, fn){
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM phanmucgia WHERE mamucdich = ? order by chisodau', [mamucdich], function(err, rows){
			if(rows.length == 1)
				{
				var hdct = {
					mahoadon : mahoadon,
					chisotieuthutheobac : chisotieuthu,
					dongiatheobac : rows[0].dongiahientai
				};
				themHoaDonChiTiet(req, hdct, function(st){
					return fn(true);
				});
				}
			else
				{
				for(var i = 0; i < rows.length; i++)
					{
					(function(){
						var numloop = 0;
						if(parseInt(chisotieuthu) >= parseInt(rows[i].chisocuoi)){
							var j = parseInt(rows[i].chisocuoi) - parseInt(rows[i].chisodau) + 1;
							var hdct = {
									mahoadon : mahoadon,
									chisotieuthutheobac : j,
									dongiatheobac : rows[i].dongiahientai,
							};
							if(chisotieuthu == parseInt(rows[i].chisocuoi))
								{
								themHoaDonChiTiet(req, hdct, function(st){
									console.log('1a');
									return fn(true);
								});
								}
							else
								{
								themHoaDonChiTiet(req, hdct, function(st){
									console.log('1b');
								});
								}
						}
						else{
							var j = chisotieuthu - parseInt(rows[i].chisodau) + 1;
							var hdct = {
								mahoadon : mahoadon,
								chisotieuthutheobac : j,
								dongiatheobac : rows[i].dongiahientai
							};
							if(j > 0)
								{
								themHoaDonChiTiet(req, hdct, function(st){
//									if(i == (rows.length - 1))
//										{
										console.log('1c');
										return fn(true);
//										}
								});
								}
						}
					})(i);
					}
				}
		});
	});
};
exports.deteleHoaDonChiTiet = function(req, mahoadon, fn){
	req.getConnection(function(err, connection){
		connection.query('DELETE FROM hoadonchitiet WHERE mahoadon = ?',[mahoadon], function(err, rows){
			if(!err)
				{
				return fn(true);
				}
			else
				{
				console.log(err);
				return fn(false);
				}
		});
	});
}