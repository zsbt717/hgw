$(function(){
		$("#close").click(function(e){
			e.stopPropagation();
			$("#navBox").css("display","none");
			//console.log(1);
	});
	
	$(".navtab1").hover(function(){
			show();
		},function(){
			hide();
	});
	$("navBox").hover(function(){
		show();
	},function(){
		hide();
	})
	
	
	var timer = null;
	function show(){
		$("#navBox").css("display","block");
		clearInterval(timer);
	}
	
	function hide(){
		timer = setTimeout(function(){
			$("#navBox").css("display","none");
		},300);
	}
})
