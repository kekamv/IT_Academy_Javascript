/*Creeu una variable on juntareu el nom i els cognoms (tot en una variable) 
  i un altre on juntareu la data de naixement separada per �/� (tot en una variable). 
  Mostreu per consola les variables del nom complet, la data de naixement i 
  si l�any de naixement es de trasp�s o no.*/
		
		//Exemple de sortida per consola:
		
	var nom="Raquel";
	var cognom1="Martín";
	var cognom2= "Vicente";
	
	var nomComplet= nom+" "+cognom1 +" " +cognom2;
	console.log("El meu nom es "+nomComplet);
		//El meu nom �s Juan Perez Gonzalez
	
	
	var diaNaix= prompt("Introdueix en número el dia de naixement dd");
	var mesNaix= prompt("Introdueix en número el mes de naixement MM");
	var anyNaix= prompt("Introdueix en número l'any de naixement YYYY");
	
	if (diaNaix.length < 2) {
		diaNaix="0"+diaNaix;
	}
	
	if (mesNaix.length < 2) {
		mesNaix="0"+mesNaix;
	}
	
	var dataNaix=diaNaix+"/"+mesNaix+"/"+anyNaix;
	
	console.log("Vaig néixer el "+dataNaix);
		//Vaig n�ixer el 01/01/1979
		
	const BASE_ANY_TRASPAS=1948; //primer any de trasp�s de refer�ncia
	
	var anyNaixementTps; //si l'any de naixement �s o no de trasp�s
	
	if ((anyNaix - BASE_ANY_TRASPAS) % 4 === 0) {
		
		anyNaixementTps= 1;
	}
	else {
		
		anyNaixementTps= 0;
	}
	
	switch (anyNaixementTps) {
	
	case 1:
		console.log("/El meu any de naixement es de traspas.");
		break;
		
	case 0:
		console.log("El meu any de naixement no es de traspas");
		break;
	}

