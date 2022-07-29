let buttonAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement; 
let soma = document.getElementById('soma') as HTMLButtonElement;
let saldoTotal = document.getElementById('saldoTotal') as HTMLButtonElement;
let buttonLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
value.innerHTML = 0

if(saldoTotal && buttonAtualizar) {
    buttonAtualizar.addEventListener('click', () => {
        let valorASomar = Number(soma);
        somarAoValor(valorASomar)
    })    

    function somarAoValor(valor : number): void { 
        let saldo: number = 0;
        if(saldoTotal.innerText !== "") {
            saldo = Number(saldoTotal.innerHTML);
        }

        const totalDaSoma = valor + valor;
        saldoTotal.innerText = totalDaSoma.toString();
    }
    buttonLimpar.addEventListener('click', () => {
        limparSaldo();
    });

    function limparSaldo(): void {
        limparSaldo.arguments = '0';
    }
}

function value(soma: HTMLButtonElement, value: any) {
    throw new Error("Function not implemented.");
}
import {  } from "module";
