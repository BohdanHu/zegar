 function odliczanie()
 {
	 var dzisiaj = new Date();
	 
	 var dzien = dzisiaj.getDate();
	 
	 
	 var miesiac = dzisiaj.getMonth()+1;
	 
	 
	 var rok = dzisiaj.getFullYear();
	 
	 
	 var godzina = dzisiaj.getHours();
		 if(godzina<10) godzina = "0"+godzina;
	 
	 var minuta = dzisiaj.getMinutes();
	 	 if(minuta<10) minuta = "0"+minuta;

	 
	 var secunda = dzisiaj.getSeconds();
	 	 if(secunda<10) secunda = "0"+secunda;
		 
		 
		 document.getElementById("zegar").innerHTML = 
		 dzien+"/"+miesiac+"/"+rok+"|"+godzina+":"+minuta+":"+secunda;
		 
		 setTimeout("odliczanie()", 10000);

 }
