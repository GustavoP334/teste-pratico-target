# Desafio de Programação

Este repositório contém soluções para um conjunto de problemas de programação, resolvidos usando a linguagem de programação da minha escolha. As soluções abordam diversos conceitos, como iteração, manipulação de sequências, cálculos de faturamento, entre outros.

## Questões

### 1) Cálculo de Soma

Dado o trecho de código abaixo, ao final do processamento, qual será o valor da variável `SOMA`?

```plaintext
int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça {
    K = K + 1;
    SOMA = SOMA + K;
}
Imprimir(SOMA);
```

### 2) Sequência de Fibonacci
Dada a sequência de Fibonacci (0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa que, ao receber um número informado, calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número pertence ou não à sequência.

### 3) Faturamento Diário
Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, escreva um programa que calcule e retorne:

- O menor valor de faturamento ocorrido em um dia do mês;
- O maior valor de faturamento ocorrido em um dia do mês;
- O número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

### Importante:
- Utilizar dados em formato JSON ou XML como fonte dos dados de faturamento mensal.
- Ignorar os dias sem faturamento (finais de semana e feriados) no cálculo da média.

### 4) Percentual de Representação de Estados
Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
```plaintext
SP – R$67.836,43
RJ – R$36.678,66
MG – R$29.229,88
ES – R$27.165,48
Outros – R$19.849,53
```
Escreva um programa que calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

### 5) Inversão de String
Escreva um programa que inverta os caracteres de uma string.
### Importante:
- A string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código.
- Evite usar funções prontas, como reverse.
