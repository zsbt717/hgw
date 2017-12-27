$(function(){
	
	$.get("js/smBanr.json",function(data){
		
		var html = template("smBanr",data);
		
		$("#smBaner").html(html);
	});
	
	$.get("js/moveLunbo.json",function(data){
		var html = template("movelunbo",data);
		//console.log(data);
		$("#lubo").html(html);
	});
	
	$.get("js/moveLunbo.json",function(data){
		var html = template("movelunbo1",data);
		//console.log(data);
		$("#lubo1").html(html);
	});
	
	
	
	
	
	$("#lb-wrap .prev").click(function(e){
		//console.log(e.target);
		var left1 = $("#lubo").css("left");
		left1 = parseInt(left1);
		
		
		
		if(left1 == 0){
			left1 = 0;
			$("#lubo").stop().animate({left:0},100);
		}else{
			left1 = left1 + 1200;
		}
		
		$("#lubo").stop().animate({left:left1},1000);
		
	});
	$("#lb-wrap .next").click(function(e){
		
		var left1 = $("#lubo").css("left");
		left1 = parseInt(left1);
		
		
		if(left1 == -2400){
			left1 = -2400 ;
			$("#lubo").stop().animate({left:0},100);
		}else{
			left1 = left1 - 1200;
		}
		
		$("#lubo").stop().animate({left:left1},1000);
		
	});
	
	
	
	
	
	
	$("#lb-wrap1 .prev").click(function(e){
		//console.log(e.target);
		var left1 = $("#lubo1").css("left");
		left1 = parseInt(left1);
		
		
		
		if(left1 == 0){
			left1 = 0;
			$("#lubo1").stop().animate({left:0},100);
		}else{
			left1 = left1 + 1200;
		}
		
		$("#lubo1").stop().animate({left:left1},1000);
		
	});
	$("#lb-wrap1 .next").click(function(e){
		
		var left1 = $("#lubo1").css("left");
		left1 = parseInt(left1);
		
		
		if(left1 == -2400){
			left1 = -2400 ;
			$("#lubo1").stop().animate({left:0},100);
		}else{
			left1 = left1 - 1200;
		}
		
		$("#lubo1").stop().animate({left:left1},1000);
		
	});
	
	
	
	
	
});
