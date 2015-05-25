$(function(){
	$(document).on('keypress','.txtChiSoMoi',function(e){
		if(e.which == 13)
			{
			var index = $(this).index('.txtChiSoMoi');
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
						}

					}
				if(chisomoi > chisocu)
					{
					if(luusolieunhap(chisomoi, chisocu, $('.txtMaHoaDon:eq(' + index + ')').val(), $('.txtMaMucDich:eq(' + index + ')').val()) == true)
						{
						$('.div-ChiSoThucThu:eq(' + index + ')').html(chisomoi - chisocu);
						$('.div-trangthai:eq(' + index + ')').html('<span class="glyphicon glyphicon-ok"></span>');
						$('.color-tr:eq(' + index + ')').css('color', 'blue');
						}
					}
//				if(chisomoi == chisocu)
//					{
//					$('.div-ChiSoThucThu:eq(' + index + ')').html('0');
//					$('.div-trangthai:eq(' + index + ')').html('<span class="glyphicon glyphicon-remove"></span>');
//					$('.color-tr:eq(' + index + ')').css('color', 'black');
//					}
				}
			}
		});
	$(document).on('blur', '.txtChiSoMoi', function(){
		var index = $(this).index('.txtChiSoMoi');
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
					}

				}
			if(chisomoi > chisocu)
				{
				if(luusolieunhap(chisomoi, chisocu, $('.txtMaHoaDon:eq(' + index + ')').val(), $('.txtMaMucDich:eq(' + index + ')').val(), $('.txtMaCongTo:eq(' + index + ')').val()) == true)
					{
					$('.div-ChiSoThucThu:eq(' + index + ')').html(chisomoi - chisocu);
					$('.div-trangthai:eq(' + index + ')').html('<span class="glyphicon glyphicon-ok"></span>');
					$('.color-tr:eq(' + index + ')').css('color', 'blue');
					}

				}
//			if(chisomoi == chisocu)
//				{
//				$('.div-ChiSoThucThu:eq(' + index + ')').html('0');
//				$('.div-trangthai:eq(' + index + ')').html('<span class="glyphicon glyphicon-remove"></span>');
//				$('.color-tr:eq(' + index + ')').css('color', 'black');
//				}
			}
	});
	
});
//function
function luusolieunhap(chisomoi, chisocu, mahoadon, mamucdich, macongto){
	var st1 = false;
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