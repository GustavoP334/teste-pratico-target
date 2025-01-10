const fs = require('fs');

const caminhoDoArquivo = './src/data/dados.json';

const dados = JSON.parse(fs.readFileSync(caminhoDoArquivo, 'utf-8'));

const diaComMenorValor = dados.reduce((min: { valor: number, dia: number } | null, item: { dia: number, valor: number }) => {
    if (item.valor === 0) {
        return min;
    }

    if (min === null) {
        return { dia: item.dia, valor: item.valor };
    }

    return item.valor < min.valor ? { dia: item.dia, valor: item.valor } : min;
}, null);

const diaComMaiorValor = dados.reduce((max: { valor: number, dia: number }, item: { dia: number, valor: number }) => {
    return item.valor > max.valor ? { dia: item.dia, valor: item.valor } : max;
}, { valor: 0, dia: 0 });

const somaTotal = dados.reduce((acumulador: number, item: { valor: number }) => {
    return acumulador + item.valor;
}, 0);

const mediaMensal = somaTotal / dados.length;

let diasAcimaDaMediaMensal = 0;

dados.map((item: { valor: number }) =>{
    return item.valor > mediaMensal ? diasAcimaDaMediaMensal++ : 0
});

console.log(`Dia com Menor valor:\n${JSON.stringify(diaComMenorValor, null, 2)}`);
console.log(`Dia com Maior valor:\n${JSON.stringify(diaComMaiorValor, null, 2)}`);
console.log(`Dias em que o faturamento diário foi superior à média mensal: ${JSON.stringify(diasAcimaDaMediaMensal)}`);