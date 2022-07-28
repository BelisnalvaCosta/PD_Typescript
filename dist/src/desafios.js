"use strict";
let buttonAtualizar = document.getElementById('atualizar-saldo');
let buttonLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
if (campoSaldo && buttonAtualizar) {
    buttonAtualizar.addEventListener('click', () => {
        let valorASomar = Number(soma);
        somarAoSaldo(valorASomar);
    });
    buttonLimpar.addEventListener('click', () => {
        limparSaldo();
    });
    function somarAoSaldo(valor) {
        let valorCampoSaldo = 0;
        if (campoSaldo.innerText !== "") {
            valorCampoSaldo = Number(campoSaldo.innerHTML);
        }
        const totalDaSoma = valorCampoSaldo + valor;
        campoSaldo.innerText = totalDaSoma.toString();
    }
    function limparSaldo() {
        campoSaldo.innerHTML = '0';
    }
}
function value(soma, value) {
    throw new Error("Function not implemented.");
}
