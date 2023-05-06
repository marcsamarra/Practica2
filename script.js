
function EsNumeroValid(num)
{
    var n = parseInt(num);
    if (Number.isInteger(n)) {
        if (num < 1 || num > 50) {
            alert("Els valors introduits estar entre 1 i 50");
            return false;
        }
        else return true;
    }
    else {
        alert ("Has d'introduir un enter entre 1 i 50");
        return false;
    }
}

function esPrimer(numero)
{
    if (numero == 0 || numero == 1 ) return false;
    for (var x = 2; x < numero; x++) {
        if (numero % x == 0) return false;
    }
    return true; 
}

function esParell(numero)
{
    return (numero % 2 == 0) ? true : false;
} 

while (true)
{
    var resultat ="";

    var num1,num2,a,b;

    num1= prompt ("escriu el primer numero (1-50)");
    
    a= parseInt(num1);

    if (EsNumeroValid(a))
    {
        num2= prompt ("escriu el segón  número (1-50)");
        b= parseInt(num2);
    
        if (EsNumeroValid(b))
        {
            var suma = a + b;

            resultat = "la suma es : "+ suma +"\n";
            resultat += a;
            resultat += esPrimer(a) ? " es primer" : " no es primer";
            resultat += " i ";
            resultat += b;
            resultat += esPrimer(b) ? " es primer" : " no es primer";
            resultat +="\n";
            resultat += a;
            resultat += esParell(a) ? " es parell" : " no es parell";
            resultat += " i ";
            resultat += b;
            resultat += esParell(b) ? " es parell" : " no es parell";
            resultat +="\n";

            if (a>b) {
                for (var i = a ; i>b; i--) {
                    if (!esParell(i)) resultat+=i+", ";
                }
            }
            else 
            {
                for (var i = a ; i<=b; i++) {
                    if (esParell(i)) resultat+=i+", ";
                }
            }

            alert (resultat);
        }
    }
}
