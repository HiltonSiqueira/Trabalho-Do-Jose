// Função para calcular a expressão
function calcularExpressao(a, b, c) {
    return (a + b) * c; 
}


const a = parseInt(prompt("Digite o número A:"));
const b = parseInt(prompt("Digite o número B:"));
const c = parseInt(prompt("Digite o número C:"));


if (a > 0 && b > 0 && c > 0) {
    // Calcula e exibe o resultado
    const resultado = calcularExpressao(a, b, c);
    console.log(`O resultado da expressão é: ${resultado}`);
} else {
    console.log("Todos os números devem ser inteiros e positivos.");
}
