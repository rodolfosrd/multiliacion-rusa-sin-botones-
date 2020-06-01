function multiplicaionRusa(){
	var n1,n2, contador=0;
	n1 = document.getElementById('numero1').value;
	n2 = document.getElementById('numero2').value;
	while(n1>=1){
		if(n1%2!=0){
			contador=parseInt(contador+n2);
		}
		n1=parseInt(n1/2);
		n2=n2*2;
	}
	document.getElementById('respuesta').innerHTML=contador;
	return false;
}