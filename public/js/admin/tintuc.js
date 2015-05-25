$(function(){
	$("#txtTieuDe").attr('maxlength','100');
	$("#txtTomTac").attr('maxlength','500');
	$("#txtNoiDUng").attr('maxlength','10000');
	$('.btnAn').on('click', function(){
		var matt = $(this).data('matt');
		$.ajax({
			url : '/admin/tintuc-an',
			type : 'POST',
			data : { 'matt' : matt},
			beforeSend: function(){
				
			},
			success : function(status) {
				if(status ==true)
					{
					location.reload();
					$('#alert').html('<div class="alert alert-success alert-dismissable fade in">Thành công</div>');
					}
				else
					{
					alert('tb');
					}
			},
		});
	});
	$('.btnHien').on('click', function(){
		var matt = $(this).data('matt');
		$.ajax({
			url : '/admin/tintuc-hien',
			type : 'POST',
			data : { 'matt' : matt},
			beforeSend: function(){
				
			},
			success : function(status) {
				if(status == true)
					{
					location.reload();
					$('#alert').html('<div class="alert alert-success alert-dismissable fade in">Thành công</div>');
					}
				else
					{
					alert('tb');
					}
			},
		});
	});
	$('.btnXoa').click(function(){
		var matt = $(this).data('matt');
		alert(matt);
	});
	//USER
	$(document).on('keypress','#txtTimKiem-user',function(e){
	if(e.which == 13)
		{
		var t_val = $("#txtTimKiem-user").val();
		location.href = '/home?timkiem='+t_val;
		}
	});
});