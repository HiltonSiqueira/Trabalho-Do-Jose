// Função para converter a idade em anos, meses e dias para apenas dias
function calcularIdadeEmDias(anos, meses, dias) {
    const diasPorAno = 365; 
    const diasPorMes = 30;  

    return (anos * diasPorAno) + (meses * diasPorMes) + dias;
}


const anos = parseInt(prompt("Digite a idade em anos:"));
const meses = parseInt(prompt("Digite a idade em meses:"));
const dias = parseInt(prompt("Digite a idade em dias:"));

// Calcula e exibe a idade em dias
const idadeEmDias = calcularIdadeEmDias(anos, meses, dias);
console.log(`A idade em dias é: ${idadeEmDias}`);
