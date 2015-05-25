exports.getListHoaDon = function(req, params, fn){
	var dk = '';
	req.getConnection(function(err, connection){
		var sql = "SELECT congtodien.mamucdich, hoadon.mahoadon, congtodien.macongto, khachhang.hotenkh, hoadon.chisocu, hoadon.chisomoi, chisothucthu" +
					" FROM khachhang, congtodien, hoadon, mucdichsudung " +
					" WHERE khachhang.makhachhang = congtodien.makhachhang AND congtodien.macongto = hoadon.macongto " +
					" AND congtodien.mamucdich = mucdichsudung.mamucdich AND hoadon.dathanhtoan = 0 ";
		connection.query(sql + dk + ' ORDER BY macongto DESC LIMIT ?,?',[params.offset, params.limit], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false, err);
				}
			else
				{
				console.log(sql);
				countAllHoaDon(req, params, function(total){
					return fn(true, rows, total);
				});
				}
		});
	});
};
function countAllHoaDon(req, params, fn){
	req.getConnection(function(err, connection){
		var dk = '';
		var sql = "SELECT count(*) as all_mahoadon" +
					" FROM khachhang, congtodien, hoadon " +
					" WHERE khachhang.makhachhang = congtodien.makhachhang AND congtodien.macongto = hoadon.macongto " +
					" AND hoadon.dathanhtoan = 0";
		var query = connection.query(sql + dk , function(err, rows){
			if(err)
				{
				return fn(err);
				}
			else
				{
				return fn(rows[0].all_mahoadon);
				}
		});
	});
}