// Função para calcular x e y usando as fórmulas
function resolverSistema(a, b, c, d, e, f) {
    const denominador = a * e - b * d;
    
    // Calcula x e y
    const x = (c * e - b * f) / denominador;
    const y = (a * f - c * d) / denominador;

    return { x, y };
}

// Solicita os coeficientes ao usuário
const a = parseFloat(prompt("Digite o valor de a:"));
const b = parseFloat(prompt("Digite o valor de b:"));
const c = parseFloat(prompt("Digite o valor de c:"));
const d = parseFloat(prompt("Digite o valor de d:"));
const e = parseFloat(prompt("Digite o valor de e:"));
const f = parseFloat(prompt("Digite o valor de f:"));

// Resolve o sistema e exibe os resultados
const { x, y } = resolverSistema(a, b, c, d, e, f);
console.log(`x = ${x.toFixed(2)}`);
console.log(`y = ${y.toFixed(2)}`);
