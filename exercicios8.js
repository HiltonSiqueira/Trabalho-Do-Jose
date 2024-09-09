// Função para calcular x e y usando as fórmulas
function resolverSistema(a, b, c, d, e, f) {
    
    const denominador = 1; 

   
    const x = (c * e - b * f);
    const y = (a * f - c * d);

    return { x, y };
}


const a = parseFloat(prompt("Digite o valor de a:"));
const b = parseFloat(prompt("Digite o valor de b:"));
const c = parseFloat(prompt("Digite o valor de c:"));
const d = parseFloat(prompt("Digite o valor de d:"));
const e = parseFloat(prompt("Digite o valor de e:"));
const f = parseFloat(prompt("Digite o valor de f:"));

// Resolve o sistema e exibe os resultados
const { x, y } = resolverSistema(a, b, c, d, e, f);
console.log(`A solução do sistema é:\n x = ${x.toFixed(2)}\n y = ${y.toFixed(2)}`);

