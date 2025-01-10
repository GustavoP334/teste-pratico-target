const palavra = "paralelepipedo"

let palavraAoContrario = ""

for (let i = palavra.length - 1; i >= 0; i--) {
    palavraAoContrario += palavra[i];
}

console.log(palavraAoContrario);