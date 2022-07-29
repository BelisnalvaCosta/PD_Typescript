"use strict";
let buttonAtualizar = document.getElementById('atualizar-saldo');
let buttonLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let saldo = document.getElementById('saldo');
// @ts-ignore
let saldoTotal = 0;
// @ts-ignore
limparSaldo();

if (saldo && buttonAtualizar) 
    buttonAtualizar.addEventListener('click', () => {
        let valorASomar = Number(soma);
        somarAoSaldo(valorASomar);
    });
    // @ts-ignore
    buttonLimpar.addEventListener('click', () => {
        limparSaldo();
    });
    function somarAoSaldo(valor) {
        let valorSaldo = 0;
        // @ts-ignore
        if (saldo.innerText !== "") {
            // @ts-ignore
            valorSaldo = Number(saldo.innerHTML);
        }
        const totalDaSoma = valorSaldo + valor;
        // @ts-ignore
        saldo.innerText = totalDaSoma.toString();
    }
    function limparSaldo() {
        // @ts-ignore
        saldo.innerHTML = '0';
    }

    if(buttonAtualizar) 
        // @ts-ignore  
       buttonAtualizar.addEventListener('click'), function() {
        // @ts-ignore
            (Number.value);
    };  

// @ts-ignore
function value(soma, value) {
    throw new Error("Function not implemented.");
    
    // @ts-ignore
    buttonLimpar?.addEventListener('click', () => {
        limparSaldo();
    });
}
module.exports = {};