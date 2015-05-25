$(function(){
	////
	$('#test').click(function(){
		for(var i = 0; i < 100000; i++)
			{
			location.href = '/home';
			}
	});
	//
	 $('#btnDoiMatKhau').on('click', function ( e ) {
		$('#modal-dmk').modal('show');
	});
	//
	$('#btnXacNhanDoiMatKhau').click(function(){
		var hasErr = false;
		if($('#txtMatKhauCu').val() == '')
			{
			$('#err-matkhaucu').html('Nhập mật khẩu cũ.');
			hasErr = true;
			}
		else
			{
			$.ajax({
				url : '/kiemtramatkhaukh',
				type : 'post',
				data : {'matkhau' : $('#txtMatKhauCu').val()},
				success : function(st) {
					if(st == false)
						{
						$('#err-matkhaucu').html('Mật khẩu không đúng.');
						hasErr = true;
						}
					else
						{
						$('#err-matkhaucu').html('');
						}
				},
				async : false
			});
			}
		if($('#txtMatKhauMoi').val() == '')
			{
			hasErr = true;
			$('#err-matkhaumoi').html('Nhập mật khẩu mới.');
			}
		else
			{
			if($('#txtMatKhauMoi').val().length < 6)
				{
				hasErr = true;
				$('#err-matkhaumoi').html('Mật khẩu mới lớn hơn 6 ký tự.');
				}
			else
				{
				$('#err-matkhaumoi').html('');
				}
			}
		if($('#txtMatKhauMoi2').val() == '')
			{
			hasErr = true;
			$('#err-matkhaumoi2').html('Nhập lại mật khẩu mới.');
			}
		else
			{
			if($('#txtMatKhauMoi2').val().length < 6)
				{
				hasErr = true;
				$('#err-matkhaumoi2').html('Mật khẩu mới lớn hơn 6 ký tự.');
				}
			else
				{
				if($('#txtMatKhauMoi2').val() != $('#txtMatKhauMoi').val())
					{
					$('#err-matkhaumoi2').html('Mật khẩu mới không trùng nhau');
					hasErr = true;
					}
				else
					{
					$('#err-matkhaumoi2').html('');
					}
				}
			}
		if(hasErr == false)
			{
			$.ajax({
				url : '/doimatkhau',
				data : {'matkhau' : $('#txtMatKhauMoi2').val()},
				type : 'post',
				success : function(st){
					if(st == 'no_session')
						{
						alert('Bạn chưa đăng nhập hệ thống.');
						$('#modal-dmk').modal('hide');
						}
					else
						{
						if(st == true)
							{
							alert('Đổi mật khẩu thành công.');
							$('#modal-dmk').modal('hide');
							}
						}
				}
			});
			}
	});
	$('#btnDangNhap').click(function(){
		var div = $('#div-login');
		var img ="<div align='center'><img src='./images/loading.gif' /></div>";
		$(div).hide();
		$(div).after(img);
		setTimeout(function(){
			$.ajax({
				url:"/login",type:'POST',
				data: $("#form-login").serialize(),
				success: function(status){
					if(status==true){
						$('#error-login').text('');
						//$('modal-login').data('dismiss', 'modal'); // data-dismiss="modal"
						$('modal-login').hide();
						location.reload();
						
					}
					else
						{
						$('#error-login').text('Tên đăng nhập hoặc mật khẩu không đúng');
						}
					},
					complete: function(){
						$(div).next().remove();
						$(div).show();
					},
				error:function(xhr,status,err){
					console.log(err);
					}
			});
		}, 1000);

	});
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) $('.bttop').fadeIn();
			else $('.bttop').fadeOut();
		});
		$('.bttop').click(function () {
			$('body,html').animate({scrollTop: 0}, 'slow');
		});
	
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100)
		$('#goTop').fadeIn();
		else
		$('#goTop').fadeOut();
	});
	//
	$('#goTop').click(function() {
		$('body,html').animate({scrollTop: 0}, 'slow');
	});
	$('.not-paste').bind("paste",function(e) {
		e.preventDefault();
	});
	$('.read-only').attr('readonly', 'true'); // mark it as read only
	$('.back-read-only').css('background-color' , '#DEDEDE');
});

function isNumberKey(evt)
{
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if(charCode == 59)
		return true;
	if(charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	return true;
}
function isKT(evt)
{
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if(charCode == 59)
		return true;
	if(charCode >= 48 && charCode <= 57)
		return false;
	return true;
}
function isSDT(evt)
{
	var charCode = (evt.which) ? evt.which : event.keyCode;
	if(charCode == 59 || charCode == 17)
		return true;
	if(charCode > 31 && (charCode < 48 || charCode > 57))
		return false;
	
	return true;
}

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
				return false;
				}
			if(regs[2] == 2 && regs[1] > 28)
				{
				return false;
				}
			if(regs[3] < 1902 || regs[3] > 2050) 
				{
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
	return ([ initial[2], initial[1], initial[0] ].join('/'));
}
function kiemtradutuoi(ngaysinh){
	var td = new Date();
	var dateNS = new Date(convertDate(ngaysinh));
	td.setFullYear(td.getFullYear() - 18);
	if(td > dateNS)
		{
		return true;
		}
	else
		{
		return false;
		}
}
function checkEmail(email) {
	var isValid = false;
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(regex.test(email)) {
		isValid = true;
	}
	return isValid;
}