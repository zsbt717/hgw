$(function(){
	
	var json = [{"Bimg":"img/h01.jpg","Simg":"img/shop-s01.jpg","newprice":"148.00","oldpric":"199.00"},
	{"Bimg":"img/shopX1.jpg","Simg":"img/shop-s02.jpg","newprice":"168.00","oldpric":"199.00"},
	{"Bimg":"img/h2.jpg","Simg":"img/shop-s03.jpg","newprice":"139.00","oldpric":"159.00"}
	]
	var aImgBox = document.getElementById("imgbox");
	// 大图
	var oshopImg = document.getElementById("shopImg");
	//小图
	var oSimg = document.getElementById("sImg");
	// 新价格
	var newPrice = document.getElementById("newPrice");
	//就价格
	var oldPrice = document.getElementById("oldPrice");
	// 差值
	var ocz = document.getElementById("cz");
	
	var oprev = document.getElementsByClassName("prev")[1];
	var onext = document.getElementsByClassName("next")[1];
	var otext = document.getElementsByClassName("txt")[0];
	var addcart = document.getElementById("addcart");
	
	for(let i=0,len=aImgBox.children.length;i<len;i++){
		aImgBox.children[i].onclick = function(){
			console.log(json[i]);
			oshopImg.src = json[i].Bimg;
			oSimg.src = json[i].Simg;
			newPrice.innerHTML = json[i].newprice;
			oldPrice.innerHTML = json[i].oldpric;
			ocz.innerHTML = parseFloat(json[i].oldpric)-parseFloat(json[i].newprice);
		}
	}
	var t = 1;
	oprev.onclick = function(){
		t--;
		if(t<1){
			t = 1;
		}
		otext.value = t;
	}
	onext.onclick = function(){
		t++;
		otext.value = t;
	}
	addcart.onclick = function(){
		location.href = "shoplist.html";
	}
});
