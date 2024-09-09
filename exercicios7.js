// Função para calcular o custo ao consumidor
function calcularCustoConsumidor(custoFabrica) {
    const percentualDistribuidor = 0.28; // 28%
    const percentualImpostos = 0.45;     // 45%

    const custoDistribuidor = custoFabrica * percentualDistribuidor;
    const custoImpostos = custoFabrica * percentualImpostos;
    const custoConsumidor = custoFabrica + custoDistribuidor + custoImpostos;

    return custoConsumidor;
}


const custoFabrica = parseFloat(prompt("Digite o custo de fábrica do carro:"));

// Calcula e exibe o custo ao consumidor
const custoConsumidor = calcularCustoConsumidor(custoFabrica);
console.log(`O custo ao consumidor do carro é: R$ ${custoConsumidor.toFixed(2)}`);
