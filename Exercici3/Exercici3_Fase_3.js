/*Cambieu les vocals �a� dels noms de les ciutats per el numero 4 
i guardeu els noms modificats en un nou array(ArrayCiutatsModificades). (2 punts)*/
		
	var ciutatsL = ["Barcelona","Madrid","Valencia","Malaga","Cadis","Santander"];	 
	
	var ArrayCiutatsModificades=[];

	ciutatsL.forEach(function (currentV){
		
		let regex = /a/gi;
		
		if(currentV.includes("a")) {
			
			var c=currentV.replace(regex,"4");
			
			ArrayCiutatsModificades.push(c);
		}
	});
	
//Mostreu per consola l�array modificat i ordenat per ordre alfabetic. (1 punt)
	
	console.log(ArrayCiutatsModificades.sort());
	
	console.log(ciutatsL);