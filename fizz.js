//creo el ciclo para que los numeros sean consecutivos y se incremente hasta 200
for (let i=1; i <= 200; i++)
{
    //if (i % 3 == 0 && i % 5 == 0) esto se puede reeemplazar por 15 ya que (3*5 = 15) xd 
    
    if (i % 15 == 0)  
    console.log("FizzBuzz")
    //al ser divisible por 15 se coloca el mensaje fizzbuzz
    else if (i % 3 == 0)
        console.log("Fizz")
    //aqui se aplica el enunciado fizz ya que son los divisibles por 3
    else if (i % 5 == 0)
        console.log("Buzz")
    //y los divisibles por 5 son aplicados con el buzz
    else
        console.log(i)
    //por ultimo le digo que me imprima la variable i que contiene los valores y como diria en el lol "EZ"
}
