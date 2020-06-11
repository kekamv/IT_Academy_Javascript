/*Creeu un nou array per cada una de les ciutats que tenim. 
La mida dels nous arrays sera la llargada de cada string ( string nomCiutat.Length). (0,5 punts)*/
 
	var ciutatsL = ["Barcelona","Madrid","Valencia","Malaga","Cadis","Santander"];	 
	
	
	var Barcelona = new Array (ciutatsL[0].length);
	var Madrid = new Array (ciutatsL[1].length);
	var Valencia = new Array (ciutatsL[2].length);
	var Malaga = new Array (ciutatsL[3].length);
	var Cadis = new Array (ciutatsL[4].length);
	var Santander = new Array (ciutatsL[5].length);
		
//Ompliu els nous arrays lletra per lletra.(2 punts)
	

	Barcelona=ciutatsL[0].split("");
	Madrid=ciutatsL[1].split("");
	Valencia=ciutatsL[2].split("");
	Malaga=ciutatsL[3].split("");
	Cadis=ciutatsL[4].split("");
	Santander=ciutatsL[5].split("");

		
//Mostreu per consola els nous arrays amb els noms invertits (Ex: Barcelona - anolecraB). (0,5 punts)
	
	var B =[];
	
	for (var i=Barcelona.length-1;i>=0;i--) {
	
		B.push(Barcelona[i]);		
	}

	console.log(B.toString());


	var M =[];
	
	for (var i=Madrid.length-1;i>=0;i--) {
	
		M.push(Madrid[i]);		
	}

	console.log(M.toString());
	
	
	var V =[];
	
	for (var i=Valencia.length-1;i>=0;i--) {
	
		V.push(Valencia[i]);		
	}

	console.log(V.toString());
	
	
	var Ma =[];
	
	for (var i=Malaga.length-1;i>=0;i--) {
	
		Ma.push(Malaga[i]);		
	}

	console.log(Ma.toString());

	
	
	var C =[];
	
	for (var i=Cadis.length-1;i>=0;i--) {
	
		C.push(Cadis[i]);		
	}

	console.log(C.toString());
	
	
	var S =[];
	
	for (var i=Santander.length-1;i>=0;i--) {
	
		S.push(Santander[i]);		
	}

	console.log(S.toString());
