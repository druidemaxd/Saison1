/*Ecrire un programme qui demande un nombre à l’utilisateur 
et affiche la table de multiplication de ce nombre jusqu’à 10.*/

alert("Bonjour! Bienvenue dans notre programme...");

var a = prompt("Entrez un nombre")
for(var s =1; s <= 10; s++) {
    console.log(a+ " * " + s + " = " +a*s+ "<br/>");
}