//Copy of Exercici4_Fase_2

	var Menu = new Array (5); //to collect the menu's courses
	
	var Price = new Array (5); //to collect the courses' prices
	
	for (var it=0; it<5;it++) {
		
		Menu[it] = prompt("Please enter the name of a course in the menu");
		
		Price[it] = parseFloat(prompt("Please enter the course's price"));	
		
	}

		console.log("Today in menu:");
		
		var it=0;
		
		while (it<5){
			
			console.log("Course "+(it+1)+" : "+Menu[it]+" "+Price[it].toFixed(2)+" EUR");
			
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

//End Copy of Exercici4_Fase_2
		
		/*Un cop hem acabat de demanar el menjar, haurem de comparar la llista amb l’array que hem fet al principi. 
		* En el cas que la informació que hem introduït a la List coincideixi amb la del array, 
		* haurem de sumar el preu del producte demanat; en el cas contrari haurem de mostrar 
		* un missatge que digui que el producte que hem demanat no existeix.	
		*/
			
		var total_bill=0;
		var	idx;
		var bc=0;
				
	for (var i=0; i<Order.length;i++){
				
		if (Menu.includes(Order[i]) && bc>=0) {
					
			idx=Menu.indexOf(Order[i]);
					
			total_bill+=Price[idx];
					
			bc++;
					
		} else {
					
			console.log("Your order includes a course not available in the menu");
			bc= -1;
			break;
		}
		
	};
	
	if (bc!=-1) {
	
		console.log("Your bill amounts to "+total_bill.toFixed(2)+ " euros");
	}
						
