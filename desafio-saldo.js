"use strict";
exports.__esModule = true;
var buttonAtualizar = document.getElementById('atualizar-saldo');
var soma = document.getElementById('soma');
var saldo = document.getElementById('saldo');
var buttonLimpar = document.getElementById('limpar-saldo');
value.innerHTML = 0;
if (saldo && buttonAtualizar) {
    buttonAtualizar.addEventListener('click', function () {
        var valorASomar = Number(soma);
        somarAoValor(valorASomar);
    });
    function somarAoValor(valor) {
        var saldo = 0;
        // @ts-ignore
        if (saldo.innerText !== "") {
            // @ts-ignore
            saldo = Number(saldo.innerText);
        }
        var totalDaSoma = valor + valor;
        // @ts-ignore
        saldo.innerText = totalDaSoma.toString();
    }
    // @ts-ignore
    buttonLimpar.addEventListener('click', function () {
        limparSaldo();
    });
    function limparSaldo() {
        limparSaldo.arguments = '0';
    }
}
// @ts-ignore
function value(soma, value) {
    throw new Error("Function not implemented.");
}
