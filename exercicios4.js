// Função para converter dias em anos, meses e dias
function converterDiasEmIdade(diasTotais) {
    const diasPorAno = 365;
    const diasPorMes = 30;

    const anos = Math.floor(diasTotais / diasPorAno);
    const diasRestantes = diasTotais % diasPorAno;
    const meses = Math.floor(diasRestantes / diasPorMes);
    const dias = diasRestantes % diasPorMes;

    return { anos, meses, dias };
}


const diasTotais = parseInt(prompt("Digite a idade em dias:"));

// Converte e exibe a idade em anos, meses e dias
const { anos, meses, dias } = converterDiasEmIdade(diasTotais);
console.log(`Idade: ${anos} anos, ${meses} meses e ${dias} dias`);
