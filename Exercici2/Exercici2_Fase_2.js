//Canvia la taula per una llista (List<Character>)
			
	var nom = ['R','a','q','u','3','l'];
			
	var nomAList = Object.assign({},nom);
	
	var nom1 = Object.assign([],nomAList);
	
	console.log(nom);
	console.log(nomAList);
	console.log(nom1);
	

//Fes un bucle que recorri aquesta taula i mostri per consola cadascuna de les lletres.	
//Al bucle, si la lletra �s una vocal imprimeix a la consola: �VOCAL�. Sin�, imprimeix: �CONSONTANT�.
		
		var vocals= [];
		
		vocals.push('a');
		vocals.push('e');
		vocals.push('i');
		vocals.push('o');
		vocals.push('u');
		vocals.push('A');
		vocals.push('E');
		vocals.push('I');
		vocals.push('O');
		vocals.push('U');
		vocals.push('á');
		vocals.push('é');
		vocals.push('í');
		vocals.push('ó');
		vocals.push('ú');
		vocals.push('à');
		vocals.push('è');
		vocals.push('ì');
		vocals.push('ò');
		vocals.push('ù');
		vocals.push('ä');
		vocals.push('ö');
		vocals.push('ü');
		vocals.push('Ä');
		vocals.push('Ö');
		vocals.push('Ü');
		vocals.push('Á');
		vocals.push('À');
		vocals.push('É');
		vocals.push('È');
		vocals.push('Ì');
		vocals.push('Ì');
		vocals.push('Ó');
		vocals.push('Ò');
		vocals.push('Ú');
		vocals.push('Ù');
		
		console.log(...vocals);
		
		
		
	function vocal_consonant (item){
		
		var text= Array ();
		
		if (vocals.includes(item)) {
			text.push("VOCAL ");
		}else {text.push("CONSONANT ");
		}
			
		console.log(text);
	}

	nom.forEach(vocal_consonant);
		
//Si trobes un numero, mostra per pantalla: �Els noms de persones no contenen n�meros!�.	
		
	function vocal_consonant_num (item) {
			
		var text= Array ();
			
		if (vocals.includes(item)) {
				
			text.push("VOCAL ");
				
		}else if (isNaN(item)==false) {
				
			console.log("Els noms de persones no contenen números!");
				
		}else {text.push("CONSONANT ");
		}
		
		console.log(text);
	}
		
	nom.forEach(vocal_consonant_num);
		
		