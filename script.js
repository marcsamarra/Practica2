
function comprobarnumero(num)
{
    if (num < 1 || num > 50) {
        alert("Els valors introduits ser enters entre 1 i 50");
        return false;
    }
    else return true;
}

while (true)
{
    var num1,num2,a,b;

    num1= prompt ("escriu el primer numero (1-50)");
    
    a= parseInt(num1);

    if (comprobarnumero(a))
    {
        num2= prompt ("escriu el segón  número (1-50)");
        b= parseInt(num2);
    
        if (comprobarnumero(b))
        {
            var suma = a + b;
            alert("la suma es : "+ suma);
        }

        


    }
   


    
}
