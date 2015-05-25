$(function(){
	$('#btnGuiYKien').click(function(){
		if($('#txtYKien').val() == '' || $('#txtYKien').val().length < 50)
			{
			$('#err-ykien').html('Không được để trống và lớn hơn 50 ký tự');
			}
		else
			{
			$('#err-ykien').html('');
			var d = new Date();
			var ngaydang = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate();
			$.ajax({
				url: '/ykienphanhoi-them',
				data: {
					'noidung': $('#txtYKien').val(),
					'ngaydang': ngaydang
					},
				type: 'post',
				success: function(st){
					if(st == true)
						{
						location.href = '/ykienphanhoi';
						}
					else
						{
						if(st == 'no_session')
							{
							alert('Bạn chưa đăng nhập hệ thống');
							}
						}
				},
			});
			}
	});
	//
	$('#txtYKien').keyup(function(){
		var sl = $('#txtYKien').val().length;
		$('#sl').html('(' + sl + ')');
	});
	
	
	
});