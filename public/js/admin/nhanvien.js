$(function(){
	$('#btnLuuNhanVienThem').click(function(){
		var hasError = false;
		if($('#txtHoTenNhanVien').val() == '')
			{
			$('#loi_hotennv').html('Họ tên nhân viên không để trống.');
			hasError = true;
			}
		else
			{
				if($('#txtHoTenNhanVien').val().length < 5)
				{
				$('#loi_hotennv').html('Họ tên phải lớn hơn 5 ký tự.');
				hasError = true;
				}
			else
				{
				$('#loi_hotennv').html('');
				}
			}
		//
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
		//kiem tra dia chi
		if($('#txtDiaChi').val() == '')
			{
			$('#loi_diachi').html('Địa chỉ không để trống.');
			hasError = true;
			}
		else
			{
				if($('#txtDiaChi').val().length < 5)
				{
				$('#loi_diachi').html('Địa chỉ phải lớn hơn 5 ký tự.');
				hasError = true;
				}
			else
				{
				$('#loi_diachi').html('');
				}
			}
		//SDT
		if($('#txtSoDienThoai').val() == '' || $('#txtSoDienThoai').val().length < 10)
			{
			$('#loi_sodt').html('Số điện thoại không được để trống và lớn hơn 10 ký tự');
			hasError = true;
			}
		else
			{
			$('#loi_sodt').html('');
			}
		//Kiem tra email
		if($('#txtEmail').val() == '')
			{
			$('#loi_email').html('Địa chỉ email không để trống.');
			}
		else
			{
			if(checkEmail($('#txtEmail').val()) == false)
				{
				$('#loi_email').html('Địa chỉ email không hợp lệ.');
				hasError = true;
				}
			else
				{
				$('#loi_email').html('');
				}
			}
		//Kiem tra phong ban
		if($('#sltPhongBan').val() == '')
			{
			$('#loi_phongban').html('Chọn phòng ban.');
			hasError = true;
			}
		else
			{
			$('#loi_phongban').html('');
			}
		//Kiem tra quyen su dung
		var soquyen = 0;
		$('.chkQuyenSuDung').each(function(index, element){
			if($('.chkQuyenSuDung:eq(' + index + ')').is(':checked'))
				{
				soquyen = soquyen + 1;
				}
		});
		if(soquyen == 0)
			{
			$('#loi_quyensudung').html('Chọn ít nhất 1 quyền sử dụng');
			hasError = true;
			}
		else
			{
			$('#loi_quyensudung').html('');
			}
		//////////////////
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
					'manhanvien' : $('#txtMaNhanVien').val(),
					'maphongban' : $('#sltPhongBan').val(),
					'hoten' : $('#txtHoTenNhanVien').val(),
					'gioitinh' : gioitinh,
					'ngaysinh' : convertDate($('#txtNgaySinh').val()),
					'diachi' : $('#txtDiaChi').val(),
					'sodienthoai' : $('#txtSoDienThoai').val(),
					'email' : $('#txtEmail').val(),
					'matkhau' :$('#txtMaNhanVien').val()
			};
			$.ajax({
				url : '/admin/nhanvien-them-luu',
				data : data,
				type : 'post',
				success : function(status) {
					if(status == true)
						{
						$('.chkQuyenSuDung').each(function(index, element){
							if($('.chkQuyenSuDung:eq(' + index + ')').is(':checked'))
								{
								var phanquyen = {
									'maquyen' : $('.chkQuyenSuDung:eq(' + index + ')').val(),
									'manhanvien' : $('#txtMaNhanVien').val()	
								};
								$.ajax({
									url : '/admin/themphanquyen',
									data : phanquyen,
									type : 'post',
									success : function(){
										
									},
									async : false,
								});
								}
						});
						location.href = '/admin/nhanvien';
						}
				},
			});
			}
//		else
//			{
//			alert('co loi');
//			}
	});
	
	
	
	
	//////////////////////////////////
	$('#btnLuuNhanVienSua').click(function(){
		var hasError = false;
		if($('#txtHoTenNhanVien').val() == '')
			{
			$('#loi_hotennv').html('Họ tên nhân viên không để trống.');
			hasError = true;
			}
		else
			{
				if($('#txtHoTenNhanVien').val().length < 5)
				{
				$('#loi_hotennv').html('Họ tên phải lớn hơn 5 ký tự.');
				hasError = true;
				}
			else
				{
				$('#loi_hotennv').html('');
				}
			}
		//
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
		//kiem tra dia chi
		if($('#txtDiaChi').val() == '')
			{
			$('#loi_diachi').html('Địa chỉ không để trống.');
			hasError = true;
			}
		else
			{
				if($('#txtDiaChi').val().length < 5)
				{
				$('#loi_diachi').html('Địa chỉ phải lớn hơn 5 ký tự.');
				hasError = true;
				}
			else
				{
				$('#loi_diachi').html('');
				}
			}
		//SDT
		if($('#txtSoDienThoai').val() == '' || $('#txtSoDienThoai').val().length < 10)
			{
			$('#loi_sodt').html('Số điện thoại không được để trống và lớn hơn 10 ký tự');
			hasError = true;
			}
		else
			{
			$('#loi_sodt').html('');
			}
		//Kiem tra email
		if($('#txtEmail').val() == '')
			{
			$('#loi_email').html('Địa chỉ email không để trống.');
			}
		else
			{
			if(checkEmail($('#txtEmail').val()) == false)
				{
				$('#loi_email').html('Địa chỉ email không hợp lệ.');
				hasError = true;
				}
			else
				{
				$('#loi_email').html('');
				}
			}
		//Kiem tra phong ban
		if($('#sltPhongBan').val() == '')
			{
			$('#loi_phongban').html('Chọn phòng ban.');
			hasError = true;
			}
		else
			{
			$('#loi_phongban').html('');
			}
		//Kiem tra quyen su dung
		var soquyen = 0;
		$('.chkQuyenSuDung').each(function(index, element){
			if($('.chkQuyenSuDung:eq(' + index + ')').is(':checked'))
				{
				soquyen = soquyen + 1;
				}
		});
		if(soquyen == 0)
			{
			$('#loi_quyensudung').html('Chọn ít nhất 1 quyền sử dụng');
			hasError = true;
			}
		else
			{
			$('#loi_quyensudung').html('');
			}
		//////////////////
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
					'manhanvien' : $('#txtMaNhanVien').val(),
					'maphongban' : $('#sltPhongBan').val(),
					'hoten' : $('#txtHoTenNhanVien').val(),
					'gioitinh' : gioitinh,
					'ngaysinh' : convertDate($('#txtNgaySinh').val()),
					'diachi' : $('#txtDiaChi').val(),
					'sodienthoai' : $('#txtSoDienThoai').val(),
					'email' : $('#txtEmail').val(),
					'matkhau' :$('#txtMaNhanVien').val()
			};
			$.ajax({
				url : '/admin/nhanvien-sua-luu',
				data : data,
				type : 'post',
				success : function(status) {
					if(status == true)
						{
						$.ajax({
							url : '/admin/xoaphanquyen',
							data : {'manhanvien' : $('#txtMaNhanVien').val()},
							type : 'post',
							success : function(st) {
								if(st == true)
									{
									$('.chkQuyenSuDung').each(function(index, element){
										if($('.chkQuyenSuDung:eq(' + index + ')').is(':checked'))
											{
											var phanquyen = {
												'maquyen' : $('.chkQuyenSuDung:eq(' + index + ')').val(),
												'manhanvien' : $('#txtMaNhanVien').val()	
											};
											$.ajax({
												url : '/admin/themphanquyen',
												data : phanquyen,
												type : 'post',
												success : function(){
													
												},
												async : false,
											});
											}
									});
									}
							},
							async: false,
						});
						location.href = '/admin/nhanvien';
						}
				},
			});
			}
	});
	/////
	$('.btnXoaNhanVien').on('click', function(){
		var manhanvien = $(this).data('manhanvien');
		var hoten = $(this).data('hoten');
		$('#btnXacNhanXoaNV').data('manhanvien', manhanvien);
		$('.modal-body').html('Bạn chắc chắn muốn xóa nhân viên <b>' + manhanvien + ' ' + hoten + '<b>?');
		$('#modal-xoanhanvien').modal('show');
	});
	
	$('#btnXacNhanXoaNV').click(function(){
		var manhanvien = $(this).data('manhanvien');
		$.ajax({
			url : '/admin/nhanvien-kiemtrarangbuoc',
			data : {'manhanvien' : manhanvien},
			type : 'post',
			success : function (st){
				if(st == true)
					{
					$('#modal-xoanhanvien').modal('hide');
					$('#div-info').html('<div class="alert alert-danger role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Không thể xóa nhân viên, lỗi ràng buộc dữ liệu</div>');
					}
				else
					{
					$.ajax({
						url : '/admin/nhanvien-xoa',
						data : {'manhanvien' : manhanvien},
						type : 'post',
						success : function(st2) {
							if(st2 == true)
								{
								$('#modal-xoanhanvien').modal('hide');
								alert('Xóa nhân viên thành công');
								location.reload();
								}
						},
					});
					}
			},
		});
	});
	
	
	
});