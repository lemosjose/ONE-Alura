let title = document.querySelector('h1');
title.innerHTML = "Hora do desafio";

function consoleButton()
{
    console.log("O botão foi clicado");
}

function alertButton()
{
    console.log("Eu amo JS");
}

function promptButton()
{
    let cidade = prompt("Digite o nome de uma cidade no Brasil");
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function sumButton()
{
    let num1 = parseInt(prompt("digite um numero"));
    let num2 = parseInt(prompt("digite outro numero"));

    alert(`A soma dos dois números é ${num1 + num2}`);
}