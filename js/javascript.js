function somme1() { 
    var variable1 = document.getElementById('quantite1').value; 
    if(variable1>0 ) { 
       var variable3 = variable1*229;
       document.getElementById('somme1').value = variable3;
       document.getElementById('somme1').innerHTML=variable3;
    } 
    else {
       document.getElementById('somme1').value = '0';
       document.getElementById('somme1').innerHTML=0;
    }}

function somme2() { 
    var variable1 = document.getElementById('quantite2').value; 
    if(variable1>0 ) { 
        var variable3 = variable1*199;
        document.getElementById('somme2').value = variable3;
        document.getElementById('somme2').innerHTML=variable3;
    } 
    else {
        document.getElementById('somme2').value = '0';
        document.getElementById('somme2').innerHTML=0;
    }}

function somme3() { 
    var variable1 = document.getElementById('quantite3').value; 
    if(variable1>0 ) { 
        var variable3 = variable1*320;
        document.getElementById('somme3').value = variable3;
        document.getElementById('somme3').innerHTML=variable3;
    } 
    else {
        document.getElementById('somme3').value = '0';
        document.getElementById('somme3').innerHTML=0;
    }}

    function somme4() { 
        var variable1 = document.getElementById('quantite4').value; 
        if(variable1>0 ) { 
            var variable3 = variable1*289;
            document.getElementById('somme4').value = variable3;
            document.getElementById('somme4').innerHTML=variable3;
        } 
        else {
            document.getElementById('somme4').value = '0';
            document.getElementById('somme4').innerHTML=0;
        }}


function somme() 
{ 
var variable1,variable2,variable3,variable4;
if(!(parseInt( document.getElementById('somme1').value)))
{variable1=0}
else{variable1 =parseInt( document.getElementById('somme1').value);}
if(!(parseInt( document.getElementById('somme2').value)))
{variable2=0}
else{variable2 =parseInt( document.getElementById('somme2').value);}
if(!(parseInt( document.getElementById('somme3').value)))
{variable3=0}
else{variable3 =parseInt( document.getElementById('somme3').value);}
if(!(parseInt( document.getElementById('somme4').value)))
{variable4=0}
else{variable4 =parseInt( document.getElementById('somme4').value);}

Totale = variable1+variable2+variable3+variable4;
if (Totale==0)

    alert("Panier vide, Veuillez choisir un produit!");
    alert("Montant Total en Dinars:" +Totale);
}


/**********************************************************************************************************************/
/**********************************************************************************************************************/

