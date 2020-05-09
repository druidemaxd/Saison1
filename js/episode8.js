/*Ecrire un programme qui demande le nom de l’utilisateur et
 son sexe et affiche Bonjour monsieur <nom> ou Bonjour madame <nom>.*/

 alert("Bonjour! Bienvenue dans notre programme...");

 var nom = prompt("Entrez votre nom");
     sex = prompt("Reseignez votre sex");
 if(sex == "homme") {
    alert("Bonjour Monsieur " + nom);
    }
 else{
    alert("Bonjour Madame " + nom);
    }