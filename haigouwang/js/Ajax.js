


function Ajax(url,method,data,fnSuccess,fnFailed){
	if(XMLHttpRequest){
		var xhr = new XMLHttpRequest();
	}else{
		var xhr = new ActiveXObject("Microsoft.XMLHTTP");
	}
	// 对接收的数据进行处理 
	var str = "";
	for(var i in data){
		str+= i+"="+data[i]+"&";
	}
	
	// 替换掉最后一个 &
	str = str.replace(/&$/,"");
	
	if(method.toLowerCase() == "get"){
		if(str == ""){
			xhr.open("get",url,true);
		}else{
			xhr.open("get",url+"?"+str,true);
		}
		
		xhr.send();
	}
	
	if(method.toLocaleLowerCase() == "post"){
		xhr.open("post",url,true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(str);
	}
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				var data = xhr.responseText;
				fnSuccess(data);
			}else{
				if(fnFailed){
					fnFailed("请求失败");
				}
			}
		}
	}
}













