$(function(){
	$.get("json/shopListTop.json",function(data){
		var html = template("fenlei",data);
		$("#fl-cont1").html(html);
	});
	
	
	$.get("json/shopListTop.json",function(data){
		var html = template("pinpai",data);
		$("#fl-cont2").html(html);
		
		var of2 = document.getElementById("fl-cont2");
		var afs = of2.getElementsByTagName("a");
		//console.log(afs.length);
		for(let i=0,len=afs.length; i<len; i++ ){
			afs[i].onclick = function(){
				goodTopBase(this);
				
			}
		}
		
		
	});
	
	$.get("json/shopListTop.json",function(data){
		var html = template("color",data);
		$("#fl-cont3").html(html);
		var of3 = document.getElementById("fl-cont3");
		var afs = of3.getElementsByTagName("a");
		//console.log(afs.length);
		for(let i=0,len=afs.length; i<len; i++ ){
			afs[i].onclick = function(){
				goodTopBase(this);
				
			}
		}
	});
	
	
	$.get("json/shopListTop.json",function(data){
		var html = template("jhl",data);
		$("#fl-cont4").html(html);
	});
	
	$.get("json/shopList.json",function(data){
		var html = template("good",data);

		$("#goodList").html(html);
		
	
		
		
		var adds = document.getElementsByClassName("add");
		var anums = document.getElementsByClassName("nums");
		var amins = document.getElementsByClassName("min");
		var addCarts = document.getElementsByClassName("addCart");
		var aNewPrices = document.getElementsByClassName("newPrice");
		var oCarts = document.getElementsByClassName("cart-s");
		var aSum = document.getElementsByClassName("s-num");
		var aZj = document.getElementsByClassName("zj");
		var aTxs = document.getElementsByClassName("TX");
		var aShop = document.getElementsByClassName("shops");
		var aGotoCart = document.getElementsByClassName("gotoCart");
		//console.log(aSum.length,aZj.length,oCarts.length,aTxs.length);
		
		
		// 控制商品数量
		var t = 1;
		for(let i=0; i<adds.length; i++){
			adds[i].onclick = function(e){
				t++;
				//console.log(t);
				anums[i].innerHTML = t;
				if ( e && e.preventDefault ) {
					e.preventDefault(); 
				}else{
					window.event.returnValue = false;
				}
			}
			amins[i].onclick = function(e){
				t--;
				if(t <= 1){
					t = 1;
				}
				anums[i].innerHTML = t;
				if ( e && e.preventDefault ) {
					e.preventDefault(); 
				}else{
					window.event.returnValue = false;
				}
			}
			aGotoCart[i].onclick = function(){
				location.href = "shopcart.html";
			}
			//  用来计算总价
			var zongjia = 0;
			// 品种
			
			var sum = 0;
			addCarts[i].onclick = function(){
				var pinzong = 0;
				// 点击X 让加入购物车消失
				aTxs[i].onclick = function(e){
					e.cancelBubble = true;
					oCarts[i].style.display = "none";
				}
				
				// 让当前的加入购物车显示出来
				for(var j=0; j<oCarts.length;j++){
					oCarts[j].style.display = "none";
				}
				oCarts[i].style.display = "block";
				
				// 取出控件里的值
				var num = parseInt(anums[i].innerHTML);
				sum+=num;
				var price = aNewPrices[i].innerHTML;
				var zj = num*parseFloat(price);
				zongjia+=zj;
				
				
				aSum[i].innerHTML=sum;
				aZj[i].innerHTML = zongjia;
				
				var oGood = {
					id:Number($(this).data('id')),
					title:$(this).data('title'),
					imgsrc:$(this).data('img'),
					newprice:$(this).data('newprice'),
					oldprice:$(this).data('oldprice'),
					num:parseInt(anums[i].innerHTML),
					checked:true
				};
				
				
				//console.log(oGood);
				// 仓库
				var sGoods = GetCookie("cart");
				if(typeof sGoods === 'undefined'){
					var aGoods = [];
					
				}else{
					var aGoods = JSON.parse(sGoods);
				}
				
				for(var s in aGoods){
					pinzong++;
					console.log(aGoods[s]);
				}
				
				// 如果bBool为true说明商品没出现过
				var bBool = aGoods.every(function(v,k){
					if(v.id === oGood.id){
						v.num++;
						return false;
					}
					return true;
					
				});
				
				if(bBool){
					pinzong++;
					
					aGoods.push(oGood);
				}
				
				SetCookie({
					name:"cart",
					value:JSON.stringify(aGoods),
					expires:7
				});
				aShop[i].innerHTML = pinzong;
			}
			
		}
		
	})
	
	
})

var flag = false;

function goodTopBase(obj){
	
		
		
		if($(obj).find("i").length){
			flag = false;
		}else{
			flag = true;
		}
		if(flag){
				$(obj).append($("<i style='font-size:14px;font-style:normal;margin-left:5px;color:red' onclick='fakeI(this)'>x</i>"));
				$(obj).addClass("fake1");
		}
		
		

}

function fakeI(obj){
	
	event.cancelBubble = true;
	
	$(obj).parent().removeClass("fake1");
	$(obj).remove();
	
}













