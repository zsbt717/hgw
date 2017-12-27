$(function(){
		$(window).scroll(function(){
		
		if($(this).scrollTop()>=400){
			$("#posiBox").show();
		}else{
			$("#posiBox").hide();
		}
	});
	var timer1 = null;
	$("#goTop").click(function(){
		var _target = 0;
			clearInterval(timer1);
			timer1 = setInterval(function(){
				//每次都需获取当前滚动条的滚动的距离
				var top = document.documentElement.scrollTop || document.body.scrollTop;
				var _cur = top; 
				//console.log(top);
				speed = (_target-_cur)/8;	
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
				document.documentElement.scrollTop += speed;
				document.body.scrollTop+= speed;
				if(_cur == _target){
					clearInterval(timer1);
				}
					
			},30);
	});
})
