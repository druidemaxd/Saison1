/*Ecrire un programme qui demande le montant d’une facture 
et affiche le total à payer après avoir appliqué une remise de 10% 
si le montant de la facture dépasse 40.000 F.*/

alert("Bonjour! Bienvenue dans notre programme...");

var nbr1 = parseInt(prompt('Entrez votre facture'));
        var frais = (nbr1*10)/100;
        var total = nbr1;

        if(nbr1 > 10000){
            alert("Votre montant est de " + nbr1-frais);
        }
        else{
            alert(nbr1*10/100 + " = " + frais);
        }
