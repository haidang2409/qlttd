
function getMucDichTheoNhom(req, dieukien, nhommd, fn){
	req.getConnection(function(err, connection){
		var sql = 'select mucdichsudung.mamucdich, mucdich, YEAR(ngaylap) as nam, MONTH(ngaylap) as thang, sum(chisothucthu) as chisothucthu, sum(tongthanhtoan) as tongthanhtoan '
				+ ' from congtodien, hoadon, mucdichsudung '
				+ '	where congtodien.macongto = hoadon.macongto '
				+ '	and congtodien.mamucdich = mucdichsudung.mamucdich '
				+ ' AND chisomoi > chisocu AND mucdichsudung.manhommdsd = ? '
				+ dieukien
				+ ' group by mucdichsudung.mamucdich, mucdich, nam, thang order by thang';
		connection.query(sql,[nhommd], function(err, rows){
			if(err)
				{
				console.log(err);
				console.log(connection.query);
				}
			else
				{
				return fn(rows);
				}
		});
	});
};
//

function getNhomMDSD(req, fn){
	var re;
	req.getConnection(function(err, connection){
		connection.query('SELECT * FROM nhommucdichsd', function(err, rows){
			if(err)
				{
				console.log(err);
				return fn(err);
				}
			else
				{
				return fn(rows);
				}
		});
	});
};

exports.getTableBaoCao1 = function(req, xparam, fn){
	var dk = '';
	if(xparam.thang != '')
		{
		dk = dk + ' AND MONTH(ngaylap) = ' + xparam.thang;
		}
	if(xparam.nam != '')
		{
		dk = dk + ' AND YEAR(ngaylap) = ' + xparam.nam;
		}
	if(xparam.trambienap != '')
		{
		dk = dk + ' AND congtodien.matram = ' + xparam.trambienap;
		}
	getNhomMDSD(req, function(dtNhom){
		if(dtNhom.length > 0)
			{
			var tongdntt2 = 0;
			var tongtien2 = 0;
			var str = '';
			str = str + '<table class="table table-bordered table-hover user-table">' +
							'<thead>' +
							'<tr class="success">' +
								'<th>STT</th>' +
								'<th>Mục đích sử dụng</th>' +
								'<th>Tháng</th>' +
								'<th>Năm</th>' +
								'<th>Tổng điện năng tt(Kw)</th>' +
								'<th>Tổng thu(Đồng)</th>' +
							'</tr>' +
						'</thead>' +
						'<tbody>';
			for(var i = 0; i < dtNhom.length; i++)
			{
				(function(i){
					getMucDichTheoNhom(req, dk, dtNhom[i].manhommdsd, function(dtMucDich){
						var tongdntt = 0;
						var tongtien = 0;
						for(var k = 0; k < dtMucDich.length; k++)
							{
							tongdntt = tongdntt + dtMucDich[k].chisothucthu;
							tongtien = tongtien + dtMucDich[k].tongthanhtoan;
							}
					str = str + '<tr>' +
									'<td class="left-col-table" colspan="4"><b>' + (i + 1) + ': ' + dtNhom[i].tennhom + '</b></td>'+
									'<td><b>' + tongdntt + '</b></td>' +
									'<td><b>' + format1(tongtien,'') + '</b></td>' +
								'</tr>';
					if(dtMucDich.length > 0)
						{
						for(var j = 0; j < dtMucDich.length; j++)
							{
							tongdntt2 = tongdntt2 + dtMucDich[j].chisothucthu;
							tongtien2 = tongtien2 + dtMucDich[j].tongthanhtoan;
							str = str + '<tr>' +
										'<td>' + (j + 1) + '</td>' +
										'<td class="left-col-table">' + dtMucDich[j].mucdich + '</td>' +
										'<td>' + dtMucDich[j].thang + '</td>' +
										'<td>' + dtMucDich[j].nam + '</td>' +
										'<td>' + dtMucDich[j].chisothucthu + '</td>' +
										'<td>' + format1(dtMucDich[j].tongthanhtoan,'') + '</td>';
							}
						str = str + '</tr>';
						}
					if(i == (dtNhom.length-1))
						{
						str = str + '</tbody></table>';
						str = str + '<div align="right"><div><b>Tổng sản lượng điện: ' +  tongdntt2 + '(Kw)<br>Tổng doanh thu: ' + format1(tongtien2,'') + ' Đồng</b></div></div>';
						return fn(str);
						}
				});
				})(i);
			}
			}
	});
};
function format1(n, currency) {
    return currency + " " + n.toFixed(2).replace(/./g, function(c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
};