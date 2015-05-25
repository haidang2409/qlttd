$(function(){
	$(document).on('click','button.xoaGiaBacThang', function(){
		$('#loi_giabacthang').html('');
		var i = 0;
		$('.xoaGiaBacThang').each(function(index, element){
			i = i + 1;
		});
		if(i > 1)
			{
				$(this).closest('tr').remove();
				$('.bac').each(function(index, element){
					$('.bac:eq(' + index + ')').html('<b>Bậc ' + (index + 1) + '  &nbsp&nbsp&nbsp&nbsp</b>');
				});
				$('.txtChiSoDau:eq(0)').val('1');
				$('.txtChiSoDau:eq(0)').attr('readonly', 'true');
				$('.txtChiSoDau:eq(0)').css('background-color' , '#DEDEDE');
			}
		else
			{
			$('#loi_giabacthang').html('Phải lớn hơn 1 mức giá');
			}
	});
	$('#btnThemMuc').click(function(){
		$('#loi_giabacthang').html('');
		var i = 0;
		$('.bac').each(function(index, element){
			i = i +1;
		});
		if(i < 6)
			{
			var str = "<tr>" +
							"<td align='center'>" +
							"<div class='bac'><b>Bậc  &nbsp&nbsp&nbsp&nbsp</b></div>" +
						"</td>" +
						"<td>" +
							"<input type='text' class='form-control txtChiSoDau not-paste' name='txtChiSoDau' maxlength='4' style='text-align: center;' onkeypress=' return isNumberKey(event)'>" +
						"</td>" +
						"<td>" +
							"<input type='text' class='form-control txtChiSoCuoi not-paste' name='txtChiSoCuoi' maxlength='4' style='text-align: center;' onkeypress=' return isNumberKey(event)'>" +
						"</td>" +
						"<td>" +
							"<input type='text' class='form-control txtGiaDien not-paste' name='txtGiaDien' maxlength='4' style='text-align: center;' onkeypress=' return isNumberKey(event)'>" +
						"</td>" +
						"<td>" +
							"<button type='button' class='btn btn-default xoaGiaBacThang'><span class='glyphicon glyphicon-remove'></span></button>" +
						"</td>" +
					"</tr>";
			$('#table-giadien tr:last').after(str);
			$('.bac').each(function(index, element){
				$('.bac:eq(' + index + ')').html('<b>Bậc ' + (index + 1) + '  &nbsp&nbsp&nbsp&nbsp</b>');
			});
			$('.not-paste').bind("paste",function(e) {
				e.preventDefault();
			});
			$('.read-only').attr('readonly', 'true'); // mark it as read only
			$('.back-read-only').css('background-color' , '#DEDEDE');
			}
		else
			{
			$('#loi_giabacthang').html('Phải nhỏ hơn 6 mức giá');
			}
		
	});
	$(document).on('onkeypress','.txtChiSoCuoi', function(){
		//alert('evv ' + index);
	});
	$(".txtGiaDien").bind("contextmenu", function(e) {
		e.preventDefault();
	});
	$('#btnLuuMucDichSuDung').click(function(){
		var hasError = false;
		if($('#txtMucDich').val() == '')
			{
			$('#loi-mucdichsd').html('Mục đích sử dụng không được trống');
			hasError = true;
			}
		else
			{
			$('#loi-mucdichsd').html('');
			}
		if($('#sltMaNhomMDSH').val() == '')
			{
			$('#loi-nhommdsd').html('Chọn nhóm mục đích sử dụng');
			hasError = true;
			}
		else
			{
			$('#loi-nhommdsd').html('');
			}
		if($('#txtThue').val() == '')
			{
			$('#loi-thue').html('Thuế không được trống');
			hasError = true;
			}
		else
			{
			$('#loi-thue').html('');
			}
		var sobac = 0;
		$('.txtChiSoDau').each(function(index, element){
			sobac = sobac + 1;
		});
		var hasErrorChiSoDau = false;
		$('.txtChiSoDau').each(function(index, element){
			if($('.txtChiSoDau:eq(' + index + ')').val() == '')
				{
				hasErrorChiSoDau = true;
				}
		});
		if(hasErrorChiSoDau == true)
			{
			$('#loi_giabacthang').html('Chỉ số đầu không được trống');
			}
		else
			{
			var hasErrorChiSoCuoi = false;
			$('.txtChiSoCuoi').each(function(index, element){
				if($('.txtChiSoCuoi:eq(' + index + ')').val() == '')
					{
					hasErrorChiSoCuoi = true;
					}
			});
			if(hasErrorChiSoCuoi == true)
				{
				$('#loi_giabacthang').html('Chỉ số cuối không được trống');
				}
			else
				{
				var hasErrorGiaDien = false;
				$('.txtGiaDien').each(function(index, element){
					if($('.txtGiaDien:eq(' + index + ')').val() == '' || parseInt($('.txtGiaDien:eq(' + index + ')').val()) < 500)
						{
						hasErrorGiaDien = true;
						}
				});
				if(hasErrorGiaDien == true)
					{
					$('#loi_giabacthang').html('Giá điện không được trống và lớn hơn 500');
					}
				else
					{
					if($('.txtChiSoDau:eq(0)').val() != '1')
						{
						$('#loi_giabacthang').html('Chỉ số đầu mức 1 phải là 1');
						}
					else
						{
						var hasErrorLonHon = false;
						$('.txtGiaDien').each(function(index, element){
							if(parseInt($('.txtChiSoDau:eq(' + index + ')').val()) >= parseInt($('.txtChiSoCuoi:eq(' + index + ')').val()))
								{
								hasErrorLonHon = true;
								}
						});
						if(hasErrorLonHon == true)
							{
							$('#loi_giabacthang').html('Chỉ số cuối phải lớn hơn chỉ số đầu');
							}
						else
							{
							var hasErrorLienTiep = false;
							var tong = 0;
							$('.txtGiaDien').each(function(index, element){
								tong = tong + 1;
							});
							for( var j =0; j < tong - 1; j++)
								{
								var k = parseInt($('.txtChiSoCuoi:eq(' + j + ')').val()) + 1;
								var h = parseInt($('.txtChiSoDau:eq(' + (j+1) + ')').val());
								if(k != h)
								{
									
									hasErrorLienTiep = true;
								}
								}
							if(hasErrorLienTiep == true)
								{
								$('#loi_giabacthang').html('Chỉ số cuối mức này phải liên tiếp với chỉ số đầu mức tiếp theo');
								}
							else
								{
								$('#loi_giabacthang').html('');
								if(hasError == false)
									{
									var k = 0;
									$('.bac').each(function(index, element){
										k = k +1;
									});
									var bthang = 0;
									if(k > 1)
										{
										bthang = 1;
										}
									var mucdichsd =
									{
										'manhommdsd' : $('#sltMaNhomMDSH').val(),
										'mucdich' : $('#txtMucDich').val(),
										'thue' : $('#txtThue').val(),
										'tinhtheobacthang' : bthang
									};
									$.ajax({
										url : '/admin/mucdichsudung-them',
										type : 'post',
										data : mucdichsd,
										success : function(st){
											if(st == 'no_session_admin')
												{
												location.href = '/admin/login';
												}
											else
												{
												if(st == false)
													{
													alert('Loi');
													}
												else
													{
													$('.bac').each(function(index, element){
														var csd = $('.txtChiSoDau:eq(' + index + ')').val();
														var csc = $('.txtChiSoCuoi:eq(' + index + ')').val();
														if(sobac == 1)
															{
															csd = 0;
															csc = 0;
															}
														var giadien = {
															'bac' : 'Bậc ' + (index + 1),
															'chisodau' : csd,
															'chisocuoi' : csc,
															'dongiahientai' : $('.txtGiaDien:eq(' + index + ')').val()
														};
														$.ajax({
															url : '/admin/giadien-them',
															type : 'post',
															data : giadien,
															success : function(st)
															{
																
															},
														async : false
														});
													});
													location.href = '/admin/mucdichsudung';
													}
												}
										}
									});
									}
								}
							}
						}
					}
				}
			}
		
	});
	///Sua
	$(document).on('click','button.xoaGiaBacThang-Sua', function(){
		$('#loi_giabacthang').html('');
		var i = 0;
		$('.xoaGiaBacThang-Sua').each(function(index, element){
			i = i + 1;
		});
		if(i > 1)
			{
				$(this).closest('tr').remove();
				$('.bac').each(function(index, element){
					$('.bac:eq(' + index + ')').html('<b>Bậc ' + (index + 1) + '  &nbsp&nbsp&nbsp&nbsp</b>');
				});
				$('.txtChiSoDau:eq(0)').val('1');
				$('.txtChiSoDau:eq(0)').attr('readonly', 'true');
			}
		else
			{
			$('.txtChiSoDau:eq(0)').val('0');
			$('.txtChiSoDau:eq(0)').attr('readonly', 'true');
			$('.txtChiSoCuoi:eq(0)').val('0');
			$('.txtChiSoCuoi:eq(0)').attr('readonly', 'true');
			$('#loi_giabacthang').html('Phải lớn hơn 1 mức giá');
			}
	});
	$('#btnThemMuc-Sua').click(function(){
		$('#loi_giabacthang').html('');
		var i = 0;
		$('.bac').each(function(index, element){
			i = i +1;
		});
		if(i < 6)
			{
			var str = "<tr>" +
							"<td align='center'>" +
							"<div class='bac'><b>Bậc  &nbsp&nbsp&nbsp&nbsp</b></div>" +
						"</td>" +
						"<td>" +
							"<input type='text' class='form-control txtChiSoDau not-paste' name='txtChiSoDau' maxlength='4' style='text-align: center;' onkeypress=' return isNumberKey(event)'>" +
						"</td>" +
						"<td>" +
							"<input type='text' class='form-control txtChiSoCuoi not-paste' name='txtChiSoCuoi' maxlength='4' style='text-align: center;' onkeypress=' return isNumberKey(event)'>" +
						"</td>" +
						"<td>" +
							"<input type='text' class='form-control txtGiaDien not-paste' name='txtGiaDien' maxlength='4' style='text-align: center;' onkeypress=' return isNumberKey(event)'>" +
						"</td>" +
						"<td>" +
							"<button type='button' class='btn btn-default xoaGiaBacThang-Sua'><span class='glyphicon glyphicon-remove'></span></button>" +
						"</td>" +
					"</tr>";
			$('#table-giadien tr:last').after(str);
			$('.bac').each(function(index, element){
				$('.bac:eq(' + index + ')').html('<b>Bậc ' + (index + 1) + '  &nbsp&nbsp&nbsp&nbsp</b>');
			});
			$('.not-paste').bind("paste",function(e) {
				e.preventDefault();
			});
			$('.read-only').attr('readonly', 'true'); // mark it as read only
			$('.back-read-only').css('background-color' , '#DEDEDE');
			}
		else
			{
			$('#loi_giabacthang').html('Phải nhỏ hơn 6 mức giá');
			}
		
	});
	$('#btnLuuMucDichSuDung-Sua').click(function(){
		var hasError = false;
		if($('#txtMucDich').val() == '')
			{
			$('#loi-mucdichsd').html('Mục đích sử dụng không được trống');
			hasError = true;
			}
		else
			{
			$('#loi-mucdichsd').html('');
			}
		if($('#sltMaNhomMDSH').val() == '')
			{
			$('#loi-nhommdsd').html('Chọn nhóm mục đích sử dụng');
			hasError = true;
			}
		else
			{
			$('#loi-nhommdsd').html('');
			}
		if($('#txtThue').val() == '')
			{
			$('#loi-thue').html('Thuế không được trống');
			hasError = true;
			}
		else
			{
			$('#loi-thue').html('');
			}
		var sobac = 0;
		$('.txtChiSoDau').each(function(index, element){
			sobac = sobac + 1;
		});
		var hasErrorChiSoDau = false;
		$('.txtChiSoDau').each(function(index, element){
			if($('.txtChiSoDau:eq(' + index + ')').val() == '')
				{
				hasErrorChiSoDau = true;
				}
		});
		if(hasErrorChiSoDau == true)
			{
			$('#loi_giabacthang').html('Chỉ số đầu không được trống');
			}
		else
			{
			var hasErrorChiSoCuoi = false;
			$('.txtChiSoCuoi').each(function(index, element){
				if($('.txtChiSoCuoi:eq(' + index + ')').val() == '')
					{
					hasErrorChiSoCuoi = true;
					}
			});
			if(hasErrorChiSoCuoi == true)
				{
				$('#loi_giabacthang').html('Chỉ số cuối không được trống');
				}
			else
				{
				var hasErrorGiaDien = false;
				$('.txtGiaDien').each(function(index, element){
					if($('.txtGiaDien:eq(' + index + ')').val() == '' || parseInt($('.txtGiaDien:eq(' + index + ')').val()) < 500)
						{
						hasErrorGiaDien = true;
						}
				});
				if(hasErrorGiaDien == true)
					{
					$('#loi_giabacthang').html('Giá điện không được trống và lớn hơn 500');
					}
				else
					{
					if($('.txtChiSoDau:eq(0)').val() != '1')
						{
						$('#loi_giabacthang').html('Chỉ số đầu mức 1 phải là 1');
						}
					else
						{
						var hasErrorLonHon = false;
						$('.txtGiaDien').each(function(index, element){
							if(parseInt($('.txtChiSoDau:eq(' + index + ')').val()) >= parseInt($('.txtChiSoCuoi:eq(' + index + ')').val()))
								{
								hasErrorLonHon = true;
								}
						});
						if(hasErrorLonHon == true)
							{
							$('#loi_giabacthang').html('Chỉ số cuối phải lớn hơn chỉ số đầu');
							}
						else
							{
							var hasErrorLienTiep = false;
							var tong = 0;
							$('.txtGiaDien').each(function(index, element){
								tong = tong + 1;
							});
							for( var j =0; j < tong - 1; j++)
								{
								var k = parseInt($('.txtChiSoCuoi:eq(' + j + ')').val()) + 1;
								var h = parseInt($('.txtChiSoDau:eq(' + (j+1) + ')').val());
								if(k != h)
								{
									
									hasErrorLienTiep = true;
								}
								}
							if(hasErrorLienTiep == true)
								{
								$('#loi_giabacthang').html('Chỉ số cuối mức này phải liên tiếp với chỉ số đầu mức tiếp theo');
								}
							else
								{
								$('#loi_giabacthang').html('');
								if(hasError == false)
									{
									var k = 0;
									$('.bac').each(function(index, element){
										k = k +1;
									});
									var bthang = 0;
									if(k > 1)
										{
										bthang = 1;
										}
									var mucdichsd =
									{
										'mamucdich' : $('#txtMaMucDich').val(),
										'manhommdsd' : $('#sltMaNhomMDSH').val(),
										'mucdich' : $('#txtMucDich').val(),
										'thue' : $('#txtThue').val(),
										'tinhtheobacthang' : bthang
									};
									$.ajax({
										url : '/admin/mucdichsudung-sualuu',
										type : 'post',
										data : mucdichsd,
										success : function(st){
											if(st == 'no_session_admin')
												{
												location.href = '/admin/login';
												}
											else
												{
												if(st == false)
													{
													alert('Loi');
													}
												else
													{
													$('.bac').each(function(index, element){
														var csd = $('.txtChiSoDau:eq(' + index + ')').val();
														var csc = $('.txtChiSoCuoi:eq(' + index + ')').val();
														if(sobac == 1)
															{
															csd = 0;
															csc = 0;
															}
														var giadien = {
															'mamucdich': $('#txtMaMucDich').val(),
															'bac' : 'Bậc ' + (index + 1),
															'chisodau' : csd,
															'chisocuoi' : csc,
															'dongiahientai' : $('.txtGiaDien:eq(' + index + ')').val()
														};
														$.ajax({
															url : '/admin/giadien-them-sua',
															type : 'post',
															data : giadien,
															success : function(st)
															{
																
															},
														async : false
														});
													});
													location.href = '/admin/mucdichsudung';
													}
												}
										},
									async : false
									});
									}
								}
							}
						}
					}
				}
			}
		
	});
});


function isNumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if(charCode == 59 || charCode == 46)
		return true;
	if(charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}
function creatBangGia()
{
	var str = "<table align='center'>" + 
					"<tr>" +
						"<td><b>Bậc</b></td>" +
						"<td align='center'><b>Chỉ số đầu</b></td>" +
						"<td align='center'><b>Chỉ số cuối</b></td>" +
						"<td align='center'><b>Giá</b></td>" +
						"<td align='center'><b>Xóa</b></td>" +
					"</tr>";
	
	for(var i = 0; i < 6; i++)
		{
		str=str+"<tr>" +
					"<td align='center'>" +
						"<div class='bac'><b>Bậc " + (i + 1) + " &nbsp&nbsp&nbsp&nbsp</b></div>" +
					"</td>" +
					"<td>" +
						"<input type='text' class='form-control' class='txtChiSoDau' name='txtChiSoDau' maxlength='4' style='text-align: center;' onkeypress=' return isNumberKey(event)'>" +
					"</td>" +
					"<td>" +
						"<input type='text' class='form-control' class='txtChiSoCuoi' name='txtChiSoCuoi' maxlength='4' style='text-align: center;' onkeypress=' return isNumberKey(event)'>" +
					"</td>" +
					"<td>" +
						"<input type='text' class='form-control' class='txtGiaDien' name='txtGiaDien' maxlength='4' style='text-align: center;' onkeypress=' return isNumberKey(event)'>" +
					"</td>" +
					"<td>" +
						"<button type='button' class='btn btn-default xoaGiaBacThang'><span class='glyphicon glyphicon-remove'></span></button>" +
					"</td>" +
				"</tr>";
		}
	str = str + "</table><div class='loi_giabacthang' style='color : red;'></div>";	
	return str;
}