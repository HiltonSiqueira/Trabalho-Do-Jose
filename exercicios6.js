// Função para converter segundos em horas, minutos e segundos
function converterTempo(segundosTotais) {
    const horas = Math.floor(segundosTotais / 3600);
    const minutos = Math.floor((segundosTotais % 3600) / 60);
    const segundos = segundosTotais % 60;

    return { horas, minutos, segundos };
}


const segundosTotais = parseInt(prompt("Digite o tempo de duração em segundos:"));

// Converte e exibe o tempo em horas, minutos e segundos
const { horas, minutos, segundos } = converterTempo(segundosTotais);
console.log(`Tempo: ${horas} horas, ${minutos} minutos e ${segundos} segundos`);
