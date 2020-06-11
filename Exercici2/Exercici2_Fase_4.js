/*Crea una altra llista amb el teu cognom on cada posici� correspongui a una lletra.
  Fusiona les dues llistes en una sola. 
  A m�s, afegeix una posici� amb un espai buit entre la primera i la segona. 
  �s a dir, partim de la llista name i surname i al acabar l�execuci� 
  nom�s tindrem una que es dir� fullName.

  FullName: [�N�, �A�, �M�, �E�, � �, �S�, �U�, �R�, �N�, �A�, �M�, �E�]
*/	
		var nom = prompt("Si us plau, introdueixi el seu nom");
		
		var cognom = prompt ("Si us plau, introdueixi el seu cognom");
				
		// convertir ambos strings a arraylist y despu�s sumarlos a un arraylist de un espacio y 
		//con el m�todo  .addAll a la segunda arraylist
		
		var FullName = nom.toUpperCase().split("");
		
		FullName.push("");
		
		[...cognom].forEach(char => {
			
			FullName.push(char.toUpperCase());
		});
		
		console.log(FullName);
		
