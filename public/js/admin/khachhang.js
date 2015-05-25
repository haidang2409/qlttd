$(function(){
	$(document).on('keypress','#txtTimKiemKhachHang',function(e){
		if(e.which == 13)
			{
			var t_val = $("#txtTimKiemKhachHang").val();
			location.href = '/admin/khachhang?timkiem='+t_val;
			}
		});
	$('.btnXoaKhachHang').on('click', function(){
		var str = 'Bạn chắc chắn muốn xóa khách hàng <b> ' + $(this).data('hotenkh') + '</b>?';
		$('.modal-body').html(str);
		$('#btnXacNhanXoaKH').data('makh',$(this).data('makh'));
		$('#modal-xoakhachhang').modal('show');
	});
	$('#btnXacNhanXoaKH').click(function(){
		$.ajax({
			url : '/admin/khachhang-xoa',
			data : { 'makhachhang' : $(this).data('makh')},
			type : 'post',
			success : function(status){
				if(status == 'khongthexoa')
					{
					$('#alert-kh').html('<div class="alert alert-danger" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Không thể xóa khách hàng, lỗi ràng buộc dữ liệu</div>');
					$('#modal-xoakhachhang').modal('hide');
					}
				else
					{
					if(status == true)
						{
						alert('Xóa thành công');
						location.reload();
						}
					else
						{
						$('#alert-kh').html('<div class="alert alert-warning" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>Lỗi cơ sở dữ liệu. Không thể xóa khách hàng</div>');
						$('#modal-xoakhachhang').modal('hide');
						}
					}
			}
		});
	});

$('#btnLuuKhachHang-Sua').on('click', function(){
	var hasError = false;
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
				$('#loi-ngaysinh').html('Khách hàng không đủ tuổi để đăng ký sử dụng');
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
		var khachhang = {
			'makhachhang' : $('#txtMaKhachHang').val(),
			'hotenkh' : $('#txtHoTenKH').val(),
			'gioitinh' : gioitinh,
			'ngaysinh' : convertDate($('#txtNgaySinh').val()),
			'diachi' : $('#txtDiaChi').val(),
			'sodienthoai' : $('#txtSoDienThoai').val(),
		};
		$.ajax({
			url : '/admin/khachhang-sualuu',
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
						alert('Lỗi sửa khách hàng');
						}
					else
						{
						alert('Sửa thông tin thành công');
						location.href = '/admin/khachhang';
						}
					}
			},
		});
		}
	});
	///
	$('#export-kh').click(function(){
		window.open('data:application/vnd.ms-excel,' + $('#div-kh').html());
		e.preventDefault();
	});




});