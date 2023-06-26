function verificaChute(chute) {
    const numero = +chute // Converto para Int o valor do chute

    if(chute ==='Game Over.'){
        gameOver()
    } else if (naoNumero(numero)) { // Chamo uma função para verificar se o numero de fato é um Número ou não 
        elementoChute.innerHTML += `<div>Valor inválido</div>
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
    } 

   if(numeroMaior(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
   }

   if(acertouChute(numero)) {
    document.body.innerHTML = `<h2>Você acertou!</h2> 
    <h3>O número secreto era realmente ${numeroSecreto}! UHUUL</h3>
    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>`
   } else if(numero > numeroSecreto){
    elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-angle-down"></i></div>`
   } else if(numero < numeroSecreto){
    elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-angle-up"></i></div>`
   }
}

function naoNumero(numero) {
    return Number.isNaN(numero) // Peço o retorno de true or false para "Number.isNaN" me dizer se é um número ou não (Se for, vem false | Se não for, vem true)
}

function numeroMaior(numero) {
    return numero > maiorValor || numero < menorValor // Valido se o chute é maior que o maior valor OU menor que o menor valor
}

function acertouChute(numero) {
    return numero === numeroSecreto
} 

function gameOver() {
    document.body.classList.add("game_over")
    document.body.innerHTML = `<h2>Game over!</h2> 
    <h3>O número secreto era ${numeroSecreto}.</h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar novamente?</button>`   
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})