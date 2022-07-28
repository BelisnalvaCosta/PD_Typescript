"use strict";
let buttonAtualizar = document.getElementById('atualizar-saldo');
let buttonLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
// @ts-ignore
// @ts-ignore
let saldoTotal = 0;
// @ts-ignore
limparSaldo();

if (campoSaldo && buttonAtualizar) 
    buttonAtualizar.addEventListener('click', () => {
        let valorASomar = Number(soma);
        somarAoSaldo(valorASomar);
    });
    // @ts-ignore
    buttonLimpar.addEventListener('click', () => {
        limparSaldo();
    });
    function somarAoSaldo(valor) {
        let valorCampoSaldo = 0;
        // @ts-ignore
        if (campoSaldo.innerText !== "") {
            // @ts-ignore
            valorCampoSaldo = Number(campoSaldo.innerHTML);
        }
        const totalDaSoma = valorCampoSaldo + valor;
        // @ts-ignore
        campoSaldo.innerText = totalDaSoma.toString();
    }
    function limparSaldo() {
        // @ts-ignore
        campoSaldo.innerHTML = '0';
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