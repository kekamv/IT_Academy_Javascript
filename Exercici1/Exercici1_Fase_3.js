/*Partint de l�any 1948 heu de fer un bucle for i 
  mostrar els anys de trasp�s fins arriba al vostre any de naixement. 
  ATENCIO! Haureu de canviar el tipus de variable de l�any 1948 per poder modificar-la. */
		
	const BASE_ANY_TRASPAS=1948;
		
	for (i=BASE_ANY_TRASPAS; i<=1975;i+=4) {
			
		console.log(i);
	}
		
/*Creeu una variable bool que sera certa si l�any de naixement �s de trasp�s 
  o falsa si no ho �s.(0,75 punts)*/
		
	var anyNaixement= prompt("Introdueix l'any de naixement YYYY");
		
	var anyNaixementTps; //si l'any de naixement es o no de traspas
		
	if ((anyNaixement - BASE_ANY_TRASPAS)%4 == 0) {
			
		anyNaixementTps= 1;
	}
	else {
			
		anyNaixementTps= 0;
	}

 /*En cas de que la variable bool sigui certa, heu de mostrar per consola una frase on ho digui,
   en cas de ser falsa mostrareu la frase pertinent. 
   Creeu dues variables string per guardar les frases. (1,5 punts)*/
	
	switch (anyNaixementTps) {
		
		case 1:
			var anyNaixTpsT= "L'any de naixement es de traspas";
			console.log(anyNaixTpsT);
			break;
			
		case 0:
			var anyNaixTpsF= "L'any de naixement no es de traspas";
			console.log(anyNaixTpsF);
			break;
	}