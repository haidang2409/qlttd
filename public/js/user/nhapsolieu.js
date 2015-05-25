$(function(){
	$(document).on('click', '.btn-xacnhangui', function(){
		var index = $(this).index('.btn-xacnhangui');
		if($('.txtChiSoMoi:eq(' + index + ')').val() == '')
			{
			$('.div-ChiSoThucThu:eq(' + index + ')').html('0');
			$('.div-trangthai:eq(' + index + ')').html('<span class="glyphicon glyphicon-remove"></span>');
			$('.color-tr:eq(' + index + ')').css('color', 'black');
			$('.txtChiSoMoi:eq(' + index + ')').val('0');
			}
		else
			{
			var chisocu = parseInt($('.txtChiSoCu:eq(' + index + ')').val());
			var chisomoi = parseInt($('.txtChiSoMoi:eq(' + index + ')').val());
			if(chisomoi <= chisocu)
				{
				if(luusolieunhap0( $('.txtMaHoaDon:eq(' + index + ')').val()) == true)
					{
					$('.div-ChiSoThucThu:eq(' + index + ')').html('0');
					$('.div-trangthai:eq(' + index + ')').html('<span class="glyphicon glyphicon-remove"></span>');
					$('.color-tr:eq(' + index + ')').css('color', 'red');
					$('#info-nhapsolieu').html('<div class="alert alert-danger">Số liệu đã nhập lỗi, trả kết quả về 0</div>');
					}

				}
			if(chisomoi > chisocu)
				{
				if(luusolieunhap(chisomoi, chisocu, $('.txtMaHoaDon:eq(' + index + ')').val(), $('.txtMaMucDich:eq(' + index + ')').val(), $('.txtMaCongTo:eq(' + index + ')').val()) == true)
					{
					$('.div-ChiSoThucThu:eq(' + index + ')').html(chisomoi - chisocu);
					$('.div-trangthai:eq(' + index + ')').html('<span class="glyphicon glyphicon-ok"></span>');
					$('.color-tr:eq(' + index + ')').css('color', 'blue');
					$('#info-nhapsolieu').html('<div class="alert alert-success">Số liệu đã được cập nhật. <a href="/hoadon">Xem hóa đơn</a></div>');
					}

				}
			}
	});
	
});
//function
function luusolieunhap(chisomoi, chisocu, mahoadon, mamucdich, macongto){
	var re = false;
	$.ajax({
		url : '/admin/nhapsolieu',
		data : {
			'chisothucthu' : chisomoi - chisocu,
			'chisomoi' : chisomoi,
			'mahoadon' : mahoadon,
			'mamucdich' : mamucdich,
			'macongto' : macongto
		},
		type : 'post',
		async : false,
		beforeSend : function(){
			
		},
		success : function(st)
		{
			if(st == 'no_session')
				{
				re =  false;
				}
			else
				{
				if(st == true)
					{
					re =  true;
					}
				else
					{
					re =  false;
					}
				}
		}
	});
	return re;
}
function luusolieunhap0(mahoadon){
	var st1 = false;
	$.ajax({
		url : '/admin/nhapsolieu-0',
		data : {
			'chisothucthu' : 0,
			'chisomoi' : 0,
			'mahoadon' : mahoadon
		},
		type : 'post',
		async : false,
		success : function(st)
		{
			if(st == 'no_session')
				{
				st1 = false;
				}
			else
				{
				if(st == true)
					{
					st1 = true;
					}
				else
					{
					st1 = false;
					}
				}
		}
	});
	return st1;
}