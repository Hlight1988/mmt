// JavaScript Document

window.onload = function (){
	
}

		
	$(function(){
		
		$('.moblie_getCode_btn').mousedown(function(){
			
			$('.captcha').css('display','block');
			$('.captcha_moblie').focus(function(){
				$(this).css('border','1px solid #21BDAE');
			});
		})
		
		// 电话号码
		checkTel();
		
		// 动态密码
		moveCode();
		
		// 创建密码
		createPassword();
		
		// 确认密码
		rePassword();
		
	})
	
	// 电话号码
	function checkTel(){
		var reg = /^1[3458]\d{9}$/;
		var obj = $('#tel');
		getNum(obj,reg);		
	}
	
	// 动态密码
	function moveCode(){
		var reg = /\d{6}/;
		var obj = $('#moveCode');
		getNum(obj,reg);		
	}
	
	// 创建密码
	function createPassword(){	
		var reg = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
		var obj = $('#createPassword');
		getNum(obj,reg);
		
		}
		
		// 确认密码
	function rePassword(){	
		var reg = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
		var obj = $('#rePassword');
		getNum(obj,reg);
		
		}

	function getNum(obj,reg){		
		obj.focus(function(){
			$(this).css('border','1px solid #21BDAE');
			$(this).parent().find('span').css('display','none');
			$(this).parent().find('img').css('display','none')	;
		});
		
		obj.blur(function(){		
			var str = this.value;		
			if(!reg.exec(str)){
				$(this).css('border','1px solid red');
				$(this).parent().find('.inline-tip').css('display','inline-block');	
				$(this).parent().find('img').css('display','none');	
			}else{
				$(this).parent().find('img').css('display','inline-block');
				$(this).parent().find('.inline-tip').css('display','none');
			}
		});
	}
