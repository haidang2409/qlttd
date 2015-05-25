$(function(){
	$('#btnLuuNhomMDSD').click(function(){
		if($('#txtTenNhom').val() == '')
			{
			$('#loi_tennhom').html('Tên nhóm không được để trống');
			}
		else
			{
			$.ajax({
				url : '/admin/nhommdsd-them',
				data : {'tennhom' : $('#txtTenNhom').val()},
				type : 'post',
				beforeSend : function(){
					
				},
				success : function(status){
					if(status == 'no_session')
						{
						location.href = '/admin/login';
						}
					else
						{
						if(status == true)
							{
							location.href = '/admin/nhommdsd';
							}
						else
							{
							alert('That bai');
							}
						}
				}
			});
			}
	});
	$('.btnHienNhomMDSD').on('click', function(){
		$.ajax({
			url : '/admin/nhommdsd-hien',
			type : 'post',
			data : {'manhom' : $(this).data('manhommdsd')},
			success : function(status){
				if(status == true)
					{
					location.href = '/admin/nhommdsd';
					}
			}
		});
	});
	$('.btnAnNhomMDSD').on('click', function(){
		$.ajax({
			url : '/admin/nhommdsd-an',
			type : 'post',
			data : {'manhom' : $(this).data('manhommdsd')},
			success : function(status){
				if(status == true)
					{
					location.href = '/admin/nhommdsd';
					}
			}
		});
	});
	$('.btnXoaNhomMDSD').on('click', function(){
		var str = 'Bạn chắc chắn muốn xóa <b>' + $(this).data('tennhom') + '</b>?';
		$('#btnXacNhanXoaNhom').data('manhom',$(this).data('manhommdsd'));
		$('.modal-body').html(str);
		$('#modal-xoanhom').modal('show');
	});
	$('#btnXacNhanXoaNhom').click(function(){
		$.ajax({
			url : '/admin/nhommdsd-xoa',
			data : { 'manhom' : $(this).data('manhom')},
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
});