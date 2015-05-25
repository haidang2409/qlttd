exports.getListHoaDon = function(req, fn){
	req.getConnection(function(err, connection){
		var sql = "SELECT congtodien.mamucdich, hoadon.mahoadon, congtodien.macongto, khachhang.hotenkh, hoadon.chisocu, hoadon.chisomoi, chisothucthu" +
					" , khachhang.makhachhang, khachhang.gioitinh, khachhang.diachi, khachhang.sodienthoai" +
					" FROM khachhang, congtodien, hoadon, mucdichsudung " +
					" WHERE khachhang.makhachhang = congtodien.makhachhang AND congtodien.macongto = hoadon.macongto " +
					" AND congtodien.mamucdich = mucdichsudung.mamucdich AND hoadon.dathanhtoan = 0 AND khachhang.makhachhang = ?";
		connection.query(sql, [req.session.username], function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(false, err);
				}
			else
				{
					return fn(true, rows);
				}
		});
	});
};
