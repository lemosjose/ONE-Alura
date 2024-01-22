alert("Você abriu o jogo do numero secreto");
let NumeroMaximo = 1000
let numeroSecreto = parseInt(Math.random() * NumeroMaximo + 1);
let numeroFornecido;
let tentativas = 0;

//while - enquanto o numeroFornecido for diferente do numeroSecreto, siga rodando o bloco
while(numeroFornecido != numeroSecreto){
    //acrescenta na variável a tentativa corrente
    tentativas++;
    numeroFornecido = prompt(`Digite o seu chute para o número secreto (entre 1 e ${NumeroMaximo})`);
    if (numeroSecreto == numeroFornecido){
        // utilizando templatestring
        break;
    } else{
        if(numeroFornecido > numeroSecreto){
            alert(`O número secreto é menor que ${numeroFornecido}`);
        } else{
            alert(`O número secreto é maior que ${numeroFornecido}`);
        }
    }
}

// simples correção do plural/singular

let pluralTentativas = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Você acertou o ${numeroSecreto} com ${tentativas} ${pluralTentativas}`);