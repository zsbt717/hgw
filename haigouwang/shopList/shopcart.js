var ShopCar = {
	getGoods(){
		var sGoods = GetCookie('cart');
		if(typeof sGoods === "undefined"){
			var aGoods = [];
		}else{
			var aGoods = JSON.parse(sGoods);
		}
		return aGoods;
	},
	// 设置商品的数量
	setGoodsNum(type,id,num){
		var aGoods = this.getGoods();
		
		aGoods.forEach(function(v){
			if(v.id === id){
				switch(type){
					case "next":
						v.num++;
						break;
					case "prev":
						v.num--;
						if(v.num < 0){
							v.num = 0;
						}
						break;
					case "custom":
						v.num = num;
						break;
				}
				console.log(v.num);
			}
		});
		//再次写入cookie
		SetCookie({
			name:"cart",
			value:JSON.stringify(aGoods),
			expires:7
		});
		// 再次重新渲染页面
		this.buildUI();
	},
	
	// 删除商品
	deleteGoods(deleteIds){
		var aGoods = this.getGoods();
		for(var i=0; i<aGoods.length;i++){
			for(var j=0; j<deleteIds.length; j++){
				if(aGoods[i].id === deleteIds[j]){
					aGoods.splice(i,1);
				}
			}
		}
		//再次写入cookie
		SetCookie({
			name:"cart",
			value:JSON.stringify(aGoods),
			expires:7
		});
		// 再次重新渲染页面
		this.buildUI();
	},
	goodsStatus(aIds,status){
		var aGoods = this.getGoods();
		for(var i=0; i<aGoods.length;i++){
			for(var j=0; j<aIds.length; j++){
				if(aGoods[i].id === aIds[j]){
					aGoods[i].checked = status;
				}
			}
		}
		//再次写入cookie
		SetCookie({
			name:"cart",
			value:JSON.stringify(aGoods),
			expires:7
		});
		// 再次重新渲染页面
		this.buildUI();
	},
	
	
// 渲染页面
buildUI(){
	var aGoods = this.getGoods();
	var html = "";
	//console.log(aGoods);
	var totalPrice = 0;
	aGoods.forEach(function(v,k){
		html+=`
			<tr class="shopcart">
								<td>
									<input type="checkbox" class="checked-goods" data-id="${v.id}" `;
		html+= v.checked?"checked" : "";
		html+=`  />
								</td>
								<td class="shopimg">
									<img src="${v.imgsrc}" alt="" />
								</td>
								<td>
									<a href="">
										${v.title}
									</a>
								</td>
								<td>&yen;${v.newprice}</td>
								<td>
									<a href="javascript:;" class="prev" data-id="${v.id}">-</a>
									<input type="text" id="" value="${v.num}" class="txt custom" data-id="${v.id}"/>
									<a href="javascript:;" class="next" data-id="${v.id}">+</a>
								</td>
								<td>&yen;0.00</td>
								<td>&yen;${v.newprice*v.num}</td>
								<td><a href="">搜藏</a>|<a href="javascript:;" data-id="${v.id}" class="remove">移除</a> </td>
							</tr>
		
		`;
		if(v.checked){
			totalPrice += v.newprice*v.num;
		}
		
	});
	
	$("#tbody").html(html);
	$("#totalPrice").html(totalPrice);
}
};
(function($){
	$(function(){
		ShopCar.buildUI();
		
		$("#tbody").on("click",".next",function(){
			var aId = Number($(this).data("id"));
			//console.log(aId);
			// 调用setGoodsNum
			ShopCar.setGoodsNum("next",aId);
		});
		$("#tbody").on("click",".prev",function(){
			var aId = Number($(this).data("id"));
			//console.log(aId);
			// 调用setGoodsNum
			ShopCar.setGoodsNum("prev",aId);
		});
		
		$("#tbody").on("change",".custom",function(){
			var aId = Number($(this).data("id"));
			//console.log(aId);
			// 调用setGoodsNum
			ShopCar.setGoodsNum("custom",aId,$(this).val());
		});
		
		$("#tbody").on("click",".remove",function(){
			var aId = Number($(this).data("id"));
			
			ShopCar.deleteGoods([aId]);
		});
		
		$("#tbody").on("click",".checked-goods",function(){
			var aId = Number($(this).data("id"));
			
			ShopCar.goodsStatus([aId],$(this).prop('checked'));
			
			// 修改全选按钮的状态
			
			var bBtn = true;
			$("#tbody .checked-goods").each(function(k , v){
				if(!v.checked){
					bBtn = false;
					return false;
				}
			});
			$('#totalChecked').prop("checked",bBtn);
		});
		
		
		//全选
		$('#totalChecked').click(function(){
			var ids = [];
			$("#tbody .checked-goods").each(function(k , v){
				ids.push(Number($(v).data('id')));
			});
			//调用
			ShopCar.goodsStatus(ids,$(this).prop('checked'));
		});
		
		// 清空购物车
		$("#clearCart").click(function(){
			var ids = [];
			$("#tbody .checked-goods").each(function(k , v){
				ids.push(Number($(v).data('id')));
			});
			ShopCar.deleteGoods(ids);
		});
		
		$("#addshop").click(function(){
			location.href="shoplist.html";
		})
		
	});
})(jQuery);
