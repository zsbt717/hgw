$(function(){

	$("#navtab1").on("mouseover",function(){
			$.get("js/navDate.json",function(data){
			
				var html = template("navBoxL",data);
				
				$("#navBox-l").html(html);
			});
	});
	
	$("#navtab1").on("mouseover",function(){
			$.get("js/navDate.json",function(data){
			
				var html = template("navBoxC",data);
				
				$("#navBox-c").html(html);
			});
	});

	$("#navtab2").on("mouseover",function(){
			$.get("js/navDate1.json",function(data){
			
				var html = template("navBoxL",data);
				
				$("#navBox-l").html(html);
			});
	});
	$("#navtab2").on("mouseover",function(){
			$.get("js/navDate1.json",function(data){
			
				var html = template("navBoxC",data);
				
				$("#navBox-c").html(html);
			});
	});
	
	
	
	$("#navtab3").on("mouseover",function(){
			$.get("js/navDate2.json",function(data){
			
				var html = template("navBoxL",data);
				
				$("#navBox-l").html(html);
			});
	});
	$("#navtab3").on("mouseover",function(){
			$.get("js/navDate2.json",function(data){
			
				var html = template("navBoxC",data);
				
				$("#navBox-c").html(html);
			});
	});
	
	
	
	$("#navtab4").on("mouseover",function(){
			$.get("js/navDate4.json",function(data){
			
				var html = template("navBoxL",data);
				
				$("#navBox-l").html(html);
				
			});
	});
	
	$("#navtab4").on("mouseover",function(){
			$.get("js/navDate4.json",function(data){
			
				var html = template("navBoxC",data);
				
				console.log(html);
				$("#navBox-c").html(html);
			});
	});
	
	
})
