function findFibonacci(numero: number): boolean {
    let a = 0, b = 1;
    
    if (numero === a || numero === b){
        return true;
    }
  
    let temp;

    while (b < numero) {
      temp = a + b;
      a = b;
      b = temp;
    }
  
    return b === numero;
}

const numero = 8;

if (findFibonacci(numero)) {
    console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numero} não pertence à sequência de Fibonacci.`);
}