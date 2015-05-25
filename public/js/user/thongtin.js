$(function(){
//	$('#a-user-info').click(function(){
//		$.ajax({
//			url : '/thongtinkhachhang',
//			type : 'post',
//			success : function(data) {
//				$('.tieudethongtinuser').html('Thông tin khách hàng');
//				$('.thongtinuser').html(data);
//			},
//		});
//
//	});
	$('.onlyNumber').on('onkeypress', function(){
		return isNumberKey(evt);
	});
	var moveLeft = 20;
	var moveDown = 10;
	$('.pop-up-tr').hover(function(e) {
		var mamucdich = $(this).data('mamucdich');
		$.ajax({
			url : '/thongtingiadien-chitiet',
			type : 'post',
			data : {'mamucdich' : mamucdich},
			success : function(data)
			{
				if(data){
					var str = 'Mục đích sử dụng: ' + data[0].mucdich;
						str = str + '<br>Nhóm: ' + data[0].tennhom;
						str = str + '<br>Thuế: ' + data[0].thue;
						if(data[0].tinhtheobacthang == 1)
							{
							str = str + '<br>Giá được tính theo nhiều mức:';
							str = str + '<table class="table table-bordered">' +
											'<tr><td>Mức</td><td>Từ(Kw)</td><td>Đến(Kw)</td><td>Đơn giá(đồng)</td></tr>';
								for(var i = 0; i < data.length; i++)
									{
									str = str + '<tr><td>' + 'Mức ' + (i + 1) + '</td><td align="center">' + data[i].chisodau + '</td><td align="center">' + data[i].chisocuoi + '</td><td align="center">' + data[i].dongiahientai + '</td></tr>'
									}
								str = str + '</table>';
							}
						else
							{
							str = str + '<br>Đơn giá: ' + data[0].dongiahientai + ' đồng';
							}
					
					$('#pop-up-content-gaidien').html(str);
				}
			}
		});
		$('div#pop-up-giadien').show().delay(2000);
		}, function() {
		$('div#pop-up-giadien').hide().delay(1500);
	});

	$('.pop-up-tr').mousemove(function(e) {
		$("div#pop-up-giadien").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
	});
	
	//gia dien
	$('#').click(function(){
		var dtNhom;
		$.ajax({
			url : '/getNhomMDSD',
			type : 'post',
			success : function(data){
				if(data){
					dtNhom = data;
				}
			},
			async: false
		});
		if(dtNhom.length > 0)
			{
			var str = '';
			str = str + '<table class="table table-bordered table-hover user-table">' +
							'<thead>' +
							'<tr class="success">' +
								'<th>STT</th>' +
								'<th>Mục đích sử dụng</th>' +
								'<th>Thuế</th>' +
								'<th>Chỉ số đầu</th>' +
								'<th>Chỉ số cuối</th>' +
								'<th>Đơn giá</th>' +
								'<th>Tính theo bậc thang</th>' +
							'</tr>' +
						'</thead>' +
						'<tbody>';
				for(var i = 0; i < dtNhom.length; i++)
				{
					var dtMucDich;
					$.ajax({
						url : '/getSumMucDichSD',
						data : {'manhom' : dtNhom[i].manhommdsd},
						type : 'post',
						success : function(dt2){
							dtMucDich = dt2;
						},
						async : false
					});
					str = str + '<tr>' +
									'<td class="left-col-table" colspan="8"><b>' + (i + 1) + ': ' + dtNhom[i].tennhom + '</br></td>'+
								'</tr>';
					
					for(var j = 0; j < dtMucDich.length; j++)
						{
						var csd = '';
						if(dtMucDich[j].chisodau == 0)
							{
							csd = '_';
							}
						else
							{
							csd = dtMucDich[j].chisodau;
							}
						var csc = '';
						if(dtMucDich[j].chisocuoi == 0)
							{
							csc = '_';
							}
						else
							{
							csc = dtMucDich[j].chisocuoi;
							}
						var bt = '';
						if(dtMucDich[j].tinhtheobacthang == 0)
							{
							bt = '_';
							}
						else
							{
							bt = '<span class="glyphicon glyphicon-ok"></span>';
							}
						str = str + '<tr class="pop-up-tr" data-mamucdich="' + dtMucDich[j].mamucdich + '">' +
									'<td>' + (j + 1) + '</td>' +
									'<td class="left-col-table">' + dtMucDich[j].mucdich + '</td>' +
									'<td>' + dtMucDich[j].thue + '</td>' +
									'<td>' + csd + '</td>' +
									'<td>' + csc + '</td>' +
									'<td>' + dtMucDich[j].dongiahientai + '</td>' +
									'<td>' + bt + '</td>';
						}
					str = str + '</tr>';
				}
				str = str + '</tbody></table>';
				$('.tieudethongtinuser').html('Thông tin giá điện');
				$('.thongtinuser').html(str);
			}
		
	});
});
