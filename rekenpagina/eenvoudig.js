
function genereerTafel() {
    var vermenigvuldigtal = document.getElementById("tafel-vermenigvuldigtal").value; // De invoer van de gebruiker
    var maxVermenigvuldiger = document.getElementById("tafel-max-vermenigvuldiger").value;
    var antwoordVeld = document.getElementById("tafel-antwoord");

    antwoordVeld.value = ""; // We beginnen elke reeks met een leeg antwoord veld

    for(var vermenigvuldiger = 1; vermenigvuldiger <= maxVermenigvuldiger; vermenigvuldiger++) {
        var product = vermenigvuldiger * vermenigvuldigtal;  // We rekenen het product uit van 1 vermenigvuldiging
        var vermenigvuldiging = vermenigvuldiger + " x " + vermenigvuldigtal + " = " + product; // Dit is de tekstuele berekening die we kunnen toevoegen aan het antwoordveld.
        antwoordVeld.value += vermenigvuldiging + "\n"; // We de berekening toe aan het antwoord veld afgesloten met een nieuwe regel \n
    }

    return false; // We moeten false returnen, om te voorkomen dat de browser de pagina herlaad.
}



function breuken() {
    var maxnoemer = document.getElementById("max_noemer").value;

    var antwoordVeld = document.getElementById("breuk-antwoord");

    antwoordVeld.value = "";

    for(var noemer = 1; noemer <= maxnoemer; noemer++){
        var quotient = 1 / noemer;
        antwoordVeld.value += "1 / " + noemer + " = " + quotient + " \n ";

    }
    return false;
}

function machten() {
   var maxGrondgetal = document.getElementById("machten-grondgetal").value;

   var antwoordVeld = document.getElementById("machten-antwoord");

   antwoordVeld.value = "";

   for(var grondgetal = 1; grondgetal <= maxGrondgetal; grondgetal++){
       var product = grondgetal ^ exponent;
       var kwadraat = grondgetal + "^" + exponent + "=" + product;
       antwoordVeld.value += kwadraat + "\n";
   }
   return false;
}



function kwadraten() {
    var maxnoemer = document.getElementById("kwadraten-grondgetal").value;

    var antwoordVeld = document.getElementById("kwadraat-antwoord");

    antwoordVeld.value = "";

    for(var noemer = 1; noemer <= maxnoemer; noemer++){
        var quotient = 1 / noemer;
        antwoordVeld.value += "1 / " + noemer + " = " + quotient + " \n ";

    }
    return false;
}
