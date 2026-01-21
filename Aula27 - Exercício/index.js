function fizzbuzz(entrada) {
    if (typeof entrada !== 'number') return entrada + " Não é um número";
    if (entrada % 3 === 0  && entrada % 5 === 0) return "FizzBuzz";
    else if (entrada % 3 === 0) return "Fizz";
    else if (entrada % 5 === 0) return "Buzz";
    return entrada;
}


for(let i = 0; i < 100; i++){
    console.log(fizzbuzz(i));
}
