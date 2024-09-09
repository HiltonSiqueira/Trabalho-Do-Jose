//Pedi ajuda do GPT para arrumar meu codgo de niandertal

// as atividades a baixo vou pedir para o GPT corrigir mas segunda se vc quiser eu explico o que cada parte faz. ._.

// Função para calcular a distância entre dois pontos
function calcularDistancia(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
}

// Solicita as coordenadas dos pontos ao usuário
const x1 = parseFloat(prompt("Digite a coordenada x do 1º ponto:"));
const y1 = parseFloat(prompt("Digite a coordenada y do 1º ponto:"));
const x2 = parseFloat(prompt("Digite a coordenada x do 2º ponto:"));
const y2 = parseFloat(prompt("Digite a coordenada y do 2º ponto:"));

// exibe o resultado
const distancia = calcularDistancia(x1, y1, x2, y2);
console.log(`A distância entre os pontos é: ${distancia.toFixed(2)}`);
 //isso aqui--------------------------------${distancia.toFixed(2)}`) É uma template ($[])
// dis o chat gpte que isso permitem inserir variáveis diretamente em strings com ${variável}.
