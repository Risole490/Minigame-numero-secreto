const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = geraNumero();

function geraNumero() {
    return parseInt(Math.random()*maiorValor+1) // Converti o numero gerado para Int, pra tirar as casas depois e somei 1 no maiorValor para entrar o ultimo numero 100
}

console.log(numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor')
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor')
elementoMaiorValor.innerHTML = maiorValor