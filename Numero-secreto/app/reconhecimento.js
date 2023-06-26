const elementoChute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // Chamo a API (??)

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'; // Defino a lingua do reconhecimento
recognition.start(); // Inicio a API 

recognition.addEventListener('result', onSpeak) // Assim que a API ter um reconhecimento/result de voz, vai chamar a função onSpeak

function onSpeak(e) { // Passo o evento como parâmetro
    console.log(e)
    chute = e.results[0][0].transcript // buscando o que foi falado neste local no console
    exibeChute(chute)
    verificaChute(chute)
}

function exibeChute(chute){  // Abaixo, adiciono no espaço do elementoChute, uma div seguida do chute da pessoa 
    elementoChute.innerHTML = `
        <div>Você disse:</div>
        <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start()) // Quando a função de reconhecimento acabar, ela vai startar de novo