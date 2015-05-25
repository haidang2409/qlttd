$(function(){
	$('#btnLuuCongToDien').on('click', function(){
		var hasError = false;
		if($('#sltMaTram').val() == '')
			{
			$('#loi-trambienap').html('Chọn trạm biến áp');
			hasError = true;
			}
		else
			{
			$('#loi-trambienap').html('');
			}
		if($('#sltMaMucDich').val() == '')
			{
			$('#loi-mucdichsd').html('Chọn mục đích sử dụng');
			hasError = true;
			}
		else
			{
			$('#loi-mucdichsd').html('');
			}
		if($('#txtChiSoCot').val() == '')
			{
			$('#loi-chisocot').html('Chỉ số trụ điện không được để trống');
			hasError = true;
			}
		else
			{
			$('#loi-chisocot').html('');
			}
		if($('#txtChiSoHienTai').val() == '')
			{
			$('#loi-chisohientai').html('Chỉ số hiện tại không được để trống');
			hasError = true;
			}
		else
			{
			$('#loi-chisohientai').html('');
			}
		if($('#chkKhachHangCu').is(':checked'))
			{
			if($('#txtMaKhachHang').val() == '')
				{
				$('#loi-makhachhang').html('Nhập mã khách hàng để kiểm tra');
				hasError = true;
				}
			else
				{
				$.ajax({
					url : '/admin/khachhang-kiemtratontai',
					type : 'post',
					data : {'makhachhang' : $('#txtMaKhachHang').val()},
					success : function(st) {
						if(st == false)
							{
							$('#loi-makhachhang').html('Khách hàng không tồn tại');
							hasError = true;
							
							}
						else
							{
							$('#loi-makhachhang').html('');
							}
					},
					async: false
				});
				}
			}
		else
			{
			if($('#txtHoTenKH').val() == '')
				{
				$('#loi-hotenkh').html('Họ tên khách hàng không được để trống');
				hasError = true;
				}
			else
				{
				$('#loi-hotenkh').html('');
				}
			if($('#txtNgaySinh').val() == '')
				{
				$('#loi-ngaysinh').html('Ngày sinh không được trống');
				hasError = true;
				}
			else
				{
				if(checkDate($('#txtNgaySinh').val()) == false)
					{
					$('#loi-ngaysinh').html('Ngày sinh không đúng định dạng');
					hasError = true;
					}
				else
					{
					if(kiemtradutuoi($('#txtNgaySinh').val()) == false)
						{
						$('#loi-ngaysinh').html('Ngày sinh không đủ tuổi');
						hasError = true;
						}
					else
						{
						$('#loi-ngaysinh').html('');
						}
					}
				}
			if($('#txtDiaChi').val() == '')
				{
				$('#loi-diachi').html('Địa chỉ không được để trống');
				hasError = true;
				}
			else
				{
				$('#loi-diachi').html('');
				}
			if($('#txtSoDienThoai').val() == '' || $('#txtSoDienThoai').val().length < 10)
				{
				$('#loi-sodt').html('Số điện thoại không được để trống và lớn hơn 10 ký tự');
				hasError = true;
				}
			else
				{
				$('#loi-sodt').html('');
				}
			}
		if(hasError == false)
			{
			var gioitinh = 1;
			if($('#rdoNam').is(':checked'))
				{
				gioitinh = 1;
				}
			if($('#rdoNu').is(':checked'))
				{
				gioitinh = 0;
				}
			var data = {
				'macongto' : $('#txtMaCongToDien').val(),
				'matram' : $('#sltMaTram').val(),
				'mamucdich' : $('#sltMaMucDich').val(),
				'makhachhang' : $('#txtMaKhachHang').val(),
				'chisocot' : $('#txtChiSoCot').val(),
				'chisomoinhat' : $('#txtChiSoHienTai').val(),
			} ;
			if($('#chkKhachHangCu').is(':checked'))
				{
					$.ajax({
						url : '/admin/congtodien-them',
						type : 'post',
						data : data,
						success : function(st)
						{
							if(st == 'no_session')
								{
								location.href = '/admin/login';
								}
							else
								{
								if(st == true)
									{
									location.href = '/admin/congtodien';
									}
								else
									{
									alert('Lỗi');
									}
								}
						}
					});
				}
			else
				{
				var khachhang = {
					'makhachhang' : $('#txtMaKhachHang').val(),
					'hotenkh' : $('#txtHoTenKH').val(),
					'gioitinh' : gioitinh,
					'ngaysinh' : convertDate($('#txtNgaySinh').val()),
					'diachi' : $('#txtDiaChi').val(),
					'sodienthoai' : $('#txtSoDienThoai').val(),
				};
				$.ajax({
					url : '/admin/khachhang-them',
					type : 'post',
					data : khachhang,
					success: function(st){
						if(st == 'no_session')
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
								$.ajax({
									url : '/admin/congtodien-them',
									type : 'post',
									data : data,
									success : function(st)
									{
										if(st == 'no_session')
											{
											location.href = '/admin/login';
											}
										else
											{
											if(st == true)
												{
												location.href = '/admin/congtodien';
												}
											else
												{
												alert('Lỗi');
												}
											}
									}
								});
								}
							}
					},
				});
				}
			}
		});
	
	$('.btnAnCongToDien').on('click', function(){
			$.ajax({
				url : '/admin/congtodien-an',
				data : {'macongto' : $(this).data('macongto')},
				type : 'post',
				success : function(status){
					if(status == 'no_session')
						{
						location.href = '/admin/login';
						}
					else
						{
						if(status == true)
							{
							location.reload();
							}
						}
				},
			});
		});
	
	$('.btnHienCongToDien').on('click', function(){
		$.ajax({
			url : '/admin/congtodien-hien',
			data : {'macongto' : $(this).data('macongto')},
			type : 'post',
			success : function(status){
				if(status == 'no_session')
					{
					location.href = '/admin/login';
					}
				else
					{
					if(status == true)
						{
						location.reload();
						}
					}
			},
		});
	});
	$('.btnXoaCongToDien').on('click', function(){
		var str = 'Bạn chắc chắn muốn xóa khách hàng <b> ' + $(this).data('macongto') + '</b>?';
		$('.modal-body').html(str);
		$('#btnXacNhanXoaCongToDien').data('macongto',$(this).data('macongto'));
		$('#modal-xoacongtodien').modal('show');
	});
	$('#btnXacNhanXoaCongToDien').click(function(){
		$.ajax({
			url : '/admin/congtodien-xoa',
			data : { 'macongto' : $(this).data('macongto')},
			type : 'post',
			success : function(status){
				if(status == 'khongthexoa')
					{
					$('#alert-congtodien').html('<div class="alert alert-warning" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Lỗi ràng buột liệu. Không thể xóa công tơ điện</div>');
					$('#modal-xoacongtodien').modal('hide');
					}
				else
					{
					if(status == true)
						{
						location.href = '/admin/congtodien';
						}
					else
						{
						$('#alert-congtodien').html('<div class="alert alert-warning" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Lỗi cơ sở dữ liệu. Không thể xóa công tơ điện</div>');
						$('#modal-xoacongtodien').modal('hide');
						}
					}
			}
		});
	});
	
	$("#chkKhachHangCu").click( function(){
			if($(this).is(':checked'))
				{
				str = '<div class="form-group">' +
						'<label for="txtMaKhachHang">Mã khách hàng</label>' +
						'<input type="text" class="form-control  read-only back-read-only" name="txtMaKhachHang" id="txtMaKhachHang" maxlength="10" value="">' +
						'<div style="color : red;" id="loi-makhachhang"></div>' +
						'</div>';
				$('#div-kh').html(str);
				}
			else
				{
				$.ajax({
					url : '/admin/congtodien-bosung',
					type : 'post',
					success : function(data){
						if(data)
							{
							$('#div-kh').html(data);
							$('.read-only').attr('readonly', 'true'); // mark it as read only
							$('.back-read-only').css('background-color' , '#DEDEDE');
							$('.not-paste').bind("paste",function(e) {
								e.preventDefault();
							});
							}
					},
				});
				}
		});
		
	

});
/*
function checkDate(date) {
	re = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;
	if(date != '')
		{
		if(regs = date.match(re))
			{
			if(regs[1] < 1 || regs[1] > 31)
				{
				return false;
				}
			if(regs[2] < 1 || regs[2] > 12)
				{
				return false; }
			if(regs[3] < 1902 || regs[3] > 2050) 
				{
				form.startdate.focus();
				return false; 
				}
			} 
		else 
			{
			return false; 
			} 
		}
}
function convertDate(date){
	var initial = date.split(/\//);
	return ( [ initial[2], initial[1], initial[0] ].join('/'));
}*/
$('#btnLuuCongToDienSua').on('click', function(){
	var hasError = false;
	if($('#sltMaTram').val() == '')
		{
		$('#loi-trambienap').html('Chọn trạm biến áp');
		hasError = true;
		}
	else
		{
		$('#loi-trambienap').html('');
		}
	if($('#sltMaMucDich').val() == '')
		{
		$('#loi-mucdichsd').html('Chọn mục đích sử dụng');
		hasError = true;
		}
	else
		{
		$('#loi-mucdichsd').html('');
		}
	if($('#txtChiSoCot').val() == '')
		{
		$('#loi-chisocot').html('Chỉ số trụ điện không được để trống');
		hasError = true;
		}
	else
		{
		$('#loi-chisocot').html('');
		}
	if($('#txtChiSoHienTai').val() == '')
		{
		$('#loi-chisohientai').html('Chỉ số hiện tại không được để trống');
		hasError = true;
		}
	else
		{
		$('#loi-chisohientai').html('');
		}
	if(hasError == false)
		{
		var data = {
			'macongto' : $('#txtMaCongToDien').val(),
			'matram' : $('#sltMaTram').val(),
			'mamucdich' : $('#sltMaMucDich').val(),
			'chisocot' : $('#txtChiSoCot').val(),
			'chisomoinhat' : $('#txtChiSoHienTai').val(),
		} ;
		$.ajax({
			url : '/admin/congtodien-sualuu',
			type : 'post',
			data : data,
			success : function(st)
			{
				if(st == 'no_session')
					{
					location.href = '/admin/login';
					}
				else
					{
					if(st == true)
						{
						location.href = '/admin/congtodien';
						}
					else
						{
						alert('Lỗi');
						}
					}
			}
		});
	}
	});