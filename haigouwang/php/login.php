<?php
	$tel = $_GET["tel"];
	$psw = $_GET["pwd"];
	
	
	$data =  ["13526401709"=>"123456","18838952764"=>"654321"];
	
	$key = array_keys($data);
	if(in_array($tel,$key)){
		
		if($data[$tel] == $psw){
			echo "1";
		}esle{
			echo "0";
		}
		
	}esle{
		echo "2";
	}
	
?>