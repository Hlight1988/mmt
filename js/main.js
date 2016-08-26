// JavaScript Document

window.onscroll = function(){
	
	// le_nav
	var iTop = 0;
	var obj = document.getElementsByClassName('wrap')[0];
	while (obj)
	{
		iTop += obj.offsetTop;
		obj = obj.offsetParent;
	}
		var x=$(window).scrollTop();
			if (x >= iTop && x<7600)
			{	
				$('.le_nav').addClass('le_nav2');	
			}
			else
			{
				$('.le_nav').removeClass('le_nav2');
			}
};

var setTime = null;
$(function(){
	
		//	删除ad
		removeAd();
	
		// 轮播
		animatePlay();
	
		// le_nav
		navLeft();
	
		// nav_list_li
		navList();
	
		// 导航
		headNav();
		
		// 倒计时			
		countDown();	
		
		// search
		changeM();
});

// 轮播
function animatePlay(){
	// hot海报轮播
		var oUl = $('.hot_1');
		var aLi = $('.hot_1_li');
		var oUl2 = $('.lb_1');
		var aLi2 = $('.lb_1_li');
		var _index = 1;
		var setTime1 = null;
		var setTime2 = null;
	
		// 根据 li 的个数来确定 ul 的宽度
		oUl.css('width', 1168* aLi.length  +'px');
		$('.span2').html(aLi.length);
		
		oUl2.css('width', 689* aLi2.length  +'px');
		$('.lb_span2').html(aLi2.length);
	
		// 手动轮播
		// 右按钮
		$('.lb_ri').click(function(){
			moveNext($('.lb_1_li:first-child'),'-689px',200,$('.lb_1'),$('.lb_span1'));
		});
		
		// 右按钮
		$('.hot_ri').click(function(){
			moveNext($('.hot_1_li:first-child'),'-1168px',1000,$('.hot_1'),$('.span1'));
		});
		
		function moveNext(obj1,iM,iT,obj2,obj3){
					obj1.animate({marginLeft:iM},iT,function(){
					var temp = $(this).clone();
					$(this).remove();
					temp.css({marginLeft:'0'});
					obj2.append(temp);
					_index++;
					if(_index>aLi2.length){_index=1};
					obj3.html(_index);
			});		
		}
	
		// 左按钮
		$('.lb_le').click(function(){
			movePre();
		});
		
		function movePre(){
				var temp = $('.lb_1_li:last-child').clone();
				$('.lb_1_li:last-child').remove();
				temp.css({marginLeft:'-689px'});
				$('.lb_1').prepend(temp);
				$('.lb_1_li:first-child').animate({marginLeft:'0'},200);
				_index--;
				if(_index<1){_index=aLi2.length};
				$('.lb_span1').html(_index);
		}	
		
		$('.hot_le').click(function(){
			movePre2();
		});
		
		function movePre2(){
				var temp = $('.hot_1_li:last-child').clone();
				$('.hot_1_li:last-child').remove();
				temp.css({marginLeft:'-1168px'});
				$('.hot_1').prepend(temp);
				$('.hot_1_li:first-child').animate({marginLeft:'0'},1000);
				_index--;
				if(_index<1){_index=aLi.length};
				$('.span1').html(_index);
		}
		
		$('.lb_1,.lb_le,.lb_ri').hover(function(){
			clearInterval(setTime1);
		},function(){
			autoPlay();
		});
		
		$('.hot_1,.hot_le,.hot_ri').hover(function(){
			clearInterval(setTime2);
		},function(){
			autoPlay2();
		});
		
		// 自动轮播
		function autoPlay(){
				setTime1 = setInterval(function(){	
					moveNext($('.lb_1_li:first-child'),'-689px',200,$('.lb_1'),$('.lb_span1'));
				},5000);
		}
		autoPlay();
		
		function autoPlay2(){
				setTime2 = setInterval(function(){
					moveNext($('.hot_1_li:first-child'),'-1168px',1000,$('.hot_1'),$('.span1'));
				},5000);
		}
		
		autoPlay2();
	}
	
// 删除广告
function removeAd(){
		$('.ad_bg span').click(function(){
				$('.ad_bg').remove();
			});
	};
	
// search
function changeM(){
	$('.Sea_left ul').hover(function(){
			$('.Sea_left div').addClass('up').removeClass('down');
		},function(){
			$('.Sea_left div').addClass('down').removeClass('up');
		});
		
		$('.Sea_left ul li').click(function(){
			$(this).prependTo('.Sea_left ul');
			
			
			var str = $(".Sea_left ul li:nth-child(1)").html();
			if( str ==='团购')
			{
				$('.search_con').attr('placeholder','请输入商品名称、地址等');
			}
			else
			{
				$('.search_con').attr('placeholder','请输入商家名称、地址等');
			}
		});
	};
	
	// nav_list
	function navList(){
		$('.nav_list_li').hover(function(){
			$(this).css({'background':'#fff','border-right':'none'});
			$(this).find('.Panorama').css('display','block');
			$('.nav_list_le').css({'border-left':'1px solid #c2c2c7','border-bottom':'1px solid #c2c2c7'});
		},function(){
			$(this).css({'background':'#fafafa','border-right':'1px solid #eee'});
			$(this).find('.Panorama').css('display','none');
			$('.nav_list_le').css({'border-left':'1px solid #eee','border-bottom':'1px solid #eee'});
		});
	}
	
	// 导航条
	function headNav(){
		$('#sj').hover(function(){
			
			$('#sj .menu').css('display','block');
			$('.sj_bg').addClass('hover');
		},function(){
			$('#sj .menu').css('display','none');
			$('.sj_bg').removeClass('hover');
		});
		
		$('.drop').hover(function(){
			
			$(this).addClass('hover');
			$(this).find('.menu2').css('display','block');
		},function(){
			$(this).removeClass('hover');
			$(this).find('.menu2').css('display','none');
		});
	}
	
	// nav_left
	function navLeft(){
		$('.le_nav li').click(function(){
			// 序列号
			var _index = 0;
			_index=$(this).index()+1;
			var _top=$("#F" + _index).offset().top;
			$("body,html").animate({scrollTop:_top},500);
		});
	}
	
	// 倒计时
	
	function countDown(){
				setTime = setInterval(function(){
					show_time();
				},1000);
			}
			
		function show_time(){
			var time_start = new Date().getTime();  // 设定当前时间
			
			var time_end = new Date('2016/8/22 00:00:00').getTime(); // 设定目标时间
			
			// 计算时间差
			var time_distance = time_end - time_start;
			if (time_distance<=0){
				//显示时间
				$('.hour_1 span').html(0);
				$('.hour_2 span').html(0);
				$('.min_1 span').html(0);
				$('.min_2 span').html(0);
				$('.sec_1 span').html(0);
				$('.sec_2 span').html(0);
				}else
				{
					// day
				var int_day = Math.floor(time_distance/86400000);
				time_distance -= int_day*86400000;
				// hour
				var int_hour = Math.floor(time_distance/3600000); 
				time_distance -= int_hour * 3600000; 
				 // 分
				var int_minute = Math.floor(time_distance/60000); 
				time_distance -= int_minute * 60000; 
				// 秒 
				var int_second = Math.floor(time_distance/1000); 
				
				
				var _hour1 =	Math.floor (int_hour/10);
				var _hour2 = int_hour%10;
				var _min1 = Math.floor (int_minute/10);
				var _min2 = int_minute%10;
				var _Sec1 = Math.floor (int_second/10);
				var _Sec2 = int_second%10;
					//显示时间
				$('.hour_1 span').html(_hour1);
				$('.hour_2 span').html(_hour2);
				$('.min_1 span').html(_min1);
				$('.min_2 span').html(_min2);
				$('.sec_1 span').html(_Sec1);
				$('.sec_2 span').html(_Sec2);
			}
		}