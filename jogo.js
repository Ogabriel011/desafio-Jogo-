let nick = document.querySelector('#Nick');
let mensagem = document.querySelector('.texto')
let resposta = document.querySelector('#numero');
let resultado = document.querySelector('.resultado');
let dificuldade = document.querySelector('#Dificuldade');
let numero_definido;
let tentativas = 3;
let chances = document.querySelector('.tentativas');
let voltar_pag = document.querySelector('.reiniciar');

enviar_inputs = () => {
    mensagem.innerHTML = '<p>' + 'Olá ' + nick.value + ', vamos jogar! De acordo com a opção de intervalo que você escolheu, descubra o número.'
    if (dificuldade.value == 'opcao1') {
        numero_definido = Math.floor(Math.random()*11);
        console.log(numero_definido);
    }
    else if (dificuldade.value == 'opcao2') {
        numero_definido = Math.floor(Math.random()*101);
        console.log(numero_definido);
    }
    else{
        numero_definido = Math.floor(Math.random()*201);
        console.log(numero_definido);
    }
}


comparar = () => {

    tentativas --

    if (resposta.value == numero_definido) {
        resultado.innerHTML = '<h4>' + 'Parabéns, você conseguiu adivinhar!' + '</h4>'
    }

    else if (resposta.value > numero_definido) {
        resultado.innerHTML = '<h4>' + 'A tentativa é maior do que o número! tente um número mais baixo' + '</h4>'
    }
    
    else {
        
        resultado.innerHTML = '<h4>' + 'A tentativa é menor do que o número! tente um número mais alto' + '</h4>'
    }
    console.log(resposta.value);

    if (tentativas >= 1) {
        chances.innerHTML = '<p>' + 'Você ainda tem ' + tentativas + ' tentativas!' + '</p>'
    }
    else{
        chances.innerHTML = '<p>' + 'Suas tentativas acabam! Por favor reinicie o jogo.' + '</p>';
        voltar_pag.innerHTML = '<button id="botao3" onclick="window.location.reload()">' + 'Recarregar a Página' + '</button>';
    }}



