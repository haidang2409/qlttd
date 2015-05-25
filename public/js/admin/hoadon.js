$(function(){
	$('.btn-thanhtoan-hd-user').on('click', function(){
		$.ajax({
			url : '/hoadon-thanhtoan',
			type : 'post',
			data : {'mahoadon' : $(this).data('mahoadon')},
			success : function(st){
				if(st == true)
					{
					location.reload();
					}
				else
					{
					
					}
			}
		});
	});
	var moveLeft = 20;
	var moveDown = 10;
	$('.tr-mahoadon').hover(function(e) {
		var mahoadon = $(this).data('mahoadon');
		$.ajax({
			url : '/admin/hoadon-chitiet',
			type : 'post',
			data : {'mahoadon' : mahoadon},
			success : function(data)
			{
				if(data){
					var str = 'Họ tên khách hàng: ' + data[0].hotenkh;
						str = str + ' - &#09;Số điện thoại: ' + data[0].sodienthoai;
						str = str + '<br>Địa chỉ: ' + data[0].diachi;
						str = str + '<br>Mã hóa đơn: ' + data[0].mahoadon;
						str = str + ' - &#09;Mã công tơ điện: ' + data[0].macongto;
						if(data.length > 1)
							{
							str = str + '<br>Đơn giá chi tiết:';
							str = str + '<table align="center" border="1">' +
											'<tr><td>Chỉ số tt(Kw)</td><td>Đơn giá(đồng)</td><td>Thành tiền(đồng)</td></tr>';
								for(var i = 0; i < data.length; i++)
									{
									str = str + '<tr><td align="center">' + data[i].chisotieuthutheobac + '</td><td align="center">' + data[i].dongiatheobac + '</td><td align="center">' + data[i].thanhtientheobac + '</td></tr>'
									}
								str = str + '</table>';
								str = str + 'Thành tiền(đồng): ' + data[0].thanhtoan;
								str = str + '<br>Thuế: ' + data[0].thue + '%: ' +data[0].thuthue;
								str = str + '  - &#09;Tổng cộng: ' + data[0].tongthanhtoan;
							}
						else
							{
							str = str + '<br>Chỉ số tt(Kw): ' + data[0].chisotieuthutheobac;
							str = str + '<br>Đơn giá(đồng): ' + data[0].dongiatheobac;
							str = str + '<br>Thành tiền(đồng): ' + data[0].thanhtoan;
							str = str + '<br>Thuế: ' + data[0].thue + '%: ' +data[0].thuthue;
							str = str + '<br>Tổng cộng: ' + data[0].tongthanhtoan;
							//str = str + '<br>Ngày thanh toán: ' + data[0].ngaythanhtoan;
							}
					
					$('#pop-up-content-hoadonct').html(str);
				}
			}
		});
		$('div#pop-up-hoadonct').show().delay(2000);
		}, function() {
		$('div#pop-up-hoadonct').hide().delay(1500);
	});

	$('.tr-mahoadon').mousemove(function(e) {
		$("div#pop-up-hoadonct").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
	});
	$('#chkChonTatCa').click(function(){
		if($(this).is(':checked'))
			{
			$('.chkChonHoaDon').each(function(index, element){
				this.checked = true;
				//$('.chkChonHoaDon:eq(' + index + ')').attr('checked', false);
			});
			}
		else
			{
			$('.chkChonHoaDon').each(function(index, element){
				//$('.chkChonHoaDon:eq(' + index + ')').attr('checked', false);
				this.checked = false;
			});
			}
	});
});
