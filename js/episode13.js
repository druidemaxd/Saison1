/*Ecrire un programme qui demande sans cesse à l'utilisateur de renseigner
 la bonne réponse d’une opération (ex: Combien font 5+1 ?) 
 jusqu’à ce qu’il renseigne la bonne réponse.*/

 alert("Bonjour! Bienvenue dans notre programme...");
 
 alert("Quelle est la réponse pour 42/3 ?");
 number = parseInt(prompt("Entrez la bonne réponse"));

 var reponse = 42/3;
 do{
     number =  prompt("Essayez encore! Allé courage!");
 }
 while(parseInt(number)!=reponse);
 alert("Félicitation! vous avez entré la bonne la bonne réponse!");

