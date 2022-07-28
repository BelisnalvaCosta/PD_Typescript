let buttonAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement; 
let buttonLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLButtonElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLButtonElement;
let campoSomarAoSaldo = document.getElementById('campo-somarAoSaldo') as HTMLInputElement;

if(campoSaldo && buttonAtualizar) {
    buttonAtualizar.addEventListener('click', () => {
        let valorASomar = Number(soma);
        somarAoSaldo(valorASomar)
    })

    buttonLimpar.addEventListener('click', () => {
        limparSaldo();
    })

    function somarAoSaldo(valor : number): void { 
        let valorCampoSaldo: number = 0;
        if(campoSaldo.innerText !== "") {
            valorCampoSaldo = Number(campoSaldo.innerHTML);
        }

        const totalDaSoma = valorCampoSaldo + valor;
        campoSaldo.innerText = totalDaSoma.toString();
    }

    function limparSaldo(): void {
        campoSaldo.innerHTML = '0';
    }
}

function value(soma: HTMLButtonElement, value: any) {
    throw new Error("Function not implemented.");
}
import {  } from "module";