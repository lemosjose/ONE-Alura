function exibirMensagemInicial() //reutilizącão de código
{
    exibirTextoNaTela("h1", "Jogo do Numero Secreto");
    exibirTextoNaTela("p", "Escolha um numero entre 1 a 10");
}

exibirMensagemInicial()

let listadeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatório();
let tentativas = 1; 

function verificarChute()
{
    let chute = document.querySelector('input').value;
    
    let palavraTentativa = tentativas > 1? "tentativas" : "tentativa"; 

    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;

    if(chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou");
        exibirTextoNaTela("p", mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela("p", "O número é menor que o chute");
        }else{
            exibirTextoNaTela("p", "o numero secreto é maior");
        }
        tentativas++;
    }
}

function exibirTextoNaTela(tag, texto)
{
    let campo = document.querySelector(tag);
    campo.innerHTML= texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}


function gerarNumeroAleatório() 
{
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    if(listadeNumerosSorteados.length == numeroLimite){
        listadeNumerosSorteados = []; // decidi não criar a variável, como foi feito no conteúdo original
    }

    if(listadeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatório() // recursão: chamando a mesma função novamente
    }else{
        listadeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparCampo()
{
    document.querySelector('input').value = '';
}

function reiniciarJogo()
{
    numeroSecreto = gerarNumeroAleatório();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute("disabled", true);
}
