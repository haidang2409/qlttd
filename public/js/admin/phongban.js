$(function(){
	$("#txtTenPhongBan").attr('maxlength','100');
	$('#btnLuuPb').click(function(){
		//alert($('#txtTenPhongBan').val() + $('#txtNgayThanhLap').val());
		var hasError = false;
		if($('#txtTenPhongBan').val() == '')
			{
			$('#loi_tenphongban').html('Tên phòng ban không được trống');
			hasError = true;
			}
		else
			{
			$('#loi_tenphongban').html('');
			}
		if($('#txtNgayThanhLap').val() == '')
			{
			$('#loi_ngaythanhlap').html('Ngày thành lập không được trống');
			hasError = true;
			}
		else
			{
			if(checkDate($('#txtNgayThanhLap').val()) == false)
				{
				$('#loi_ngaythanhlap').html('Ngày thành lập không đúng định dạng');
				hasError = true;
				}
			else
				{
				$('#loi_ngaythanhlap').html('');
				}
			}
		
		/*if(Date.parse($('#txtNgayThanhLap').val()) == 'NaN')
			{
			$('#loi_ngaythanhlap').html($('#txtNgayThanhLap').val('greg'));
			}
		else
			{
			$('#loi_ngaythanhlap').html(Date.parse($('#txtNgayThanhLap').val()));
			
			}*/
		if(hasError == false)
			{
			var tt = 0;
			if($('#trangthai').val() == 'on')
				{
				tt = 1;
				}
			var data = {
				tenphongban : $('#txtTenPhongBan').val(),
				ngaythanhlap : convertDate($('#txtNgayThanhLap').val()),
				trangthai : tt
				};
			$.ajax({
				url : '/admin/phongban-them',
				type : 'POST',
				data : data,
				beforeSend : function() {
						
					},
				success : function (status) {
						if(status == true)
							{
							location.href = '/admin/phongban';
							}
						else
							{
							alert('tb');
							}
					}
			});
			}
	});
	$('.btnXoaPb').on('click', function(){
		$.ajax({
			url : '/admin/phongban-xoa',
			data : {
				maphongban : $(this).data('maphongban'),
			},
			type : 'post',
			beforeSend : function(){
				
			},
			success : function(status){
				if(status == true)
					{
					location.reload();
					}
				else
					{
					alert('tb');
					}
			},
		});
	});
	$('.btnHienPb').on('click', function(){
		$.ajax({
			url : '/admin/phongban-hien',
			data : {
				maphongban : $(this).data('maphongban'),
			},
			type : 'post',
			beforeSend : function(){
				
			},
			success : function(status){
				if(status == true)
					{
					location.reload();
					}
				else
					{
					alert('tb');
					}
			},
		});
	});
	$('.btnAnPb').on('click', function(){
		$.ajax({
			url : '/admin/phongban-an',
			data : {
				maphongban : $(this).data('maphongban'),
			},
			type : 'post',
			beforeSend : function(){
				
			},
			success : function(status){
				if(status == true)
					{
					location.reload();
					}
				else
					{
					alert('tb');
					}
			},
		});
	});
	
	$('.btnSuaPb').on('click', function(){
		$.ajax({
			url : '/admin/getInfophongban',
			type : 'post',
			data : {maphongban : $(this).data('maphongban')},
			success : function(status){
				if(status == 'no_session')
					{
					location.href = '/admin/login';
					}
				else
					{
					$('#maincontent').html(status);
					}
			},
		});
	});
});
