//Emmagatzemar en un Map tant les lletres de la llista com el nombre de vegades que apareixen


	var lletresMap = new Map();
	
	var usuariNom = prompt("Si us plau, introdueixi el seu nom");
	
	var text=usuariNom.split("");
	
	for (var i=0;i<usuariNom.length;i++) {
		
		if (lletresMap.has(text[i])) {
			
			lletresMap.set(text[i], usuariNom.split(text[i]).length -1);
			
		}else {
			
			lletresMap.set(text[i], 1);
		}
	}
	
	lletresMap.forEach(function(value, key, Map) {
		
		console.log(key + " = " + value);
	}) 
		  