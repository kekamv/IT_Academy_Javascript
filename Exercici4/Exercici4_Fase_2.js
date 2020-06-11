/*Amb un bucle for haurem d’omplir els dos arrays anteriorment creats. 
 Afegirem el nom del plat i després el preu. (1 punt)
 */

	var Menu = new Array (5); //to collect the menu's courses
	
	var Price = new Array (5); //to collect the courses' prices
	
	for (var it=0; it<5;it++) {
		
		Menu[it] = prompt("Please enter the name of a course in the menu");
		
		Price[it] = prompt("Please enter the course's price");	
	}

	/* Un cop plens els dos arrays haurem de mostrar-los i preguntar que es vol per menjar, 
 guardarem la informació en una List fent servir un bucle while. (1 punt)
 */
/*Haurem de preguntar si es vol seguir demanant menjar. Podeu fer servir el sistema (1:Si / 0:No), 
per tant haureu de crear un altre variable int per guardar la informació. (1 punt)
*/
		console.log("Today in menu:");
		
		var it=0;
		
		while (it<5){
			
			console.log("Course "+(it+1)+" : "+Menu[it]+" "+Price[it]+" EUR");
			
			it++;	
		}
		
		it=0;
		
		var Order=[];	
		
		var numOrder=1; //counter for courses, assumption: at least a first order
		
		var nextOrder=true; //to rule the while loop
		
		Order.push(prompt("What you would like to have today"));
		
		do {
			
		var temp = prompt("Anything else?"+" Y/N");
			
			if (temp.toUpperCase()=="Y") {
				
				nextOrder=true;
				
			} else {
				
				nextOrder=false;
				
			}
			
			if (nextOrder==true) {
				
				Order.push(prompt("What should it be?"));
			
				numOrder++;
			}
			
		} while (nextOrder!=false);
		
		console.log(Order);
