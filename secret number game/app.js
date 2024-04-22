let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemTelaInicial(){
    exibirTextoNaTela('h1','Jogo do número Secreto');
    exibirTextoNaTela('p','Chute um número de 1 a 10');
}

    exibirMensagemTelaInicial();

    function verificarChute(){
        let chute = document.querySelector('input').value;

        if(chute == numeroSecreto){
            exibirTextoNaTela('h1' , 'Acertou!');
            let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
            let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
            exibirTextoNaTela('p', mensagemTentativa);
            document.getElementById('reiniciar').removeAttribute('disabled');

        }else{
            if(chute > numeroSecreto){
            exibirTextoNaTela('h1','Tente novamente');
            exibirTextoNaTela('p' , 'O número secreto é menor');

            }else{
                exibirTextoNaTela('h1','Tente novamente');
                exibirTextoNaTela('p' , 'O número secreto é maior');
            }
            tentativas++;
            limparCampo();
        }
}

function gerarNumeroAleatorio(){
    let numeroSorteado =  parseInt(Math.random() * 10 + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == 10){
        listaDeNumerosSorteados = []
    }
    
    if(listaDeNumerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroSorteado);
        console.log(listaDeNumerosSorteados)
        return numeroSorteado;
    }
}

function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = '';
}

function botaoReiniciar(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemTelaInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}
