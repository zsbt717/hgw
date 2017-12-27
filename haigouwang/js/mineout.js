$(function(){
	
	var timer = null;
	function show(){
		$("#mine").css("background-color","#fff");
		$("#cart-list").css("display","block");
		clearInterval(timer);
	}
	
	function hide(){
		timer = setTimeout(function(){
			$("#mine").css("background-color","transparent");
			$("#cart-list").css("display","none");
		},300);
	}
	
	$("#mine").hover(function(){
		
		
		show();
	},function(){
		hide();
	});
	
	$("#cart-list").hover(function(){
		show();
	},function(){
		hide();
		
	})
	
	// navBox 部分
	

	
	
	
	
	// 大轮播部分
	var arr = ["url(./img/big1.jpg)","url(./img/big2.jpg)","url(./img/big3.jpg)"];
	var len = arr.length;
	var $ulBaner = $("#baner-ul");
	var $banner = $("#banner");
	var timer1 = null;

	for(var i=0; i<len; i++){
		var $Li = $("<li></li>");
		$ulBaner.append($Li);
	}
	var oUlBaners = document.getElementById("baner-ul").children;
	
	$banner.css("background-image",arr[0]);
	oUlBaners[0].className = "hover";
	
	for(let i=0; i<oUlBaners.length; i++){
		oUlBaners[i].onmouseover = function(){
			clearInterval(timer1);
			for(var j=0; j<oUlBaners.length;j++){
				oUlBaners[j].className="";
			}
			this.className = "hover";
			$banner.css("background-image",arr[i]);
		}
	}
	
	var t = 0;
	
	timer1 = setInterval(function(){
		t++;
		if(t > len-1){
			t = 0;
		}
		$banner.css("background-image",arr[t]);
		console.log(t);
		for(var i=0; i<oUlBaners.length; i++){
			oUlBaners[i].className = "";
		}
		oUlBaners[t].className = "hover";
	},8000);
	
	$banner.hover(function(){
		clearInterval(timer1);
	},function(){
		timer1 = setInterval(function(){
			t++;
		if(t > len-1){
			t = 0;
		}
		$banner.css("background-image",arr[t]);
		for(var i=0; i<oUlBaners.length; i++){
			oUlBaners[i].className = "";
		}
		oUlBaners[t].className = "hover";
	},8000);
	});
	
	
	
	
})

// 