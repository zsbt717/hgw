//参数是 轮播图的范围  轮播的li 小导航li 数据  当前值  宽度
function lunbo(oBaner,oUl,navul,data,hover,oWidth,delay){
	
	var len = data.length;
	for(var i=0; i<len; i++){
		var li = document.createElement("li");
		navul.appendChild(li);
	}
	
	var aLi = navul.children;
	
	aLi[0].className = hover;
	var ALi = oUl.children;
	var cloneNode = ALi[0].cloneNode(true);
	oUl.appendChild(cloneNode);
	oUl.style.width = oWidth*ALi.length + "px";
	for(let i=0; i<aLi.length; i++){
		aLi[i].onmouseover = function(){
			clearInterval(timer);
			for(var j=0; j<aLi.length; j++){
				aLi[i].className = "";
			}
			this.className = hover;
			 t = i - 1;
			move();
		}
	}
	
	
	var t=0; 
	var timer = setInterval(function(){
		move();
	},delay);
	
	oBaner.onmouseout = function(){
		clearInterval(timer);
		timer = setInterval(function(){
			move();
		},delay)
	}
	
	function move(){
		t++;
		if(t == ALi.length){
			t = 1;
			oUl.style.left = 0;
		}
		
		if(t == -1){
			t = ALi.length -2;
			oUl.style.left = -(ALi.length - 1)*oWidth+"px";
		}
		
		for(var j=0; j<aLi.length;j++){
			aLi[j].className = "";
		}
		if(t == ALi.length-1){
			aLi[0].className = hover;
		}else{
			aLi[t].className = hover;
		}
		
		startMove(oUl,{"left":-oWidth*t});
	}
	
}


//参数是 轮播图的范围  轮播的li 小导航li 数据  当前值  宽度
//获取元素

window.onload = function(){
	var oBaner1 = document.getElementById("banner1");
	var oUl1 = document.getElementById("oul1");
	var oNavlist1 = document.getElementById("navlist1");
	var date = ["img/sm-banner1.jpg","img/sm-banner2.jpg","img/sm-banner3.jpg"];
	
	
	
	var width = 340;
	var hover = "hover";
	lunbo(oBaner1,oUl1,oNavlist1,date,hover,width,3000);
	
	var oBaner2 = document.getElementById("banner2");
	var oUl2 = document.getElementById("oul2");
	var oNavlist2 = document.getElementById("navlist2");
	lunbo(oBaner2,oUl2,oNavlist2,date,hover,width,6000);
	
	
	var oBaner3 = document.getElementById("banner3");
	var oUl3 = document.getElementById("oul3");
	var oNavlist3 = document.getElementById("navlist3");
	lunbo(oBaner3,oUl3,oNavlist3,date,hover,width,8000);
	
	//参数是 轮播图的范围  轮播的li 小导航li 数据  当前值  宽度
	
	
}
