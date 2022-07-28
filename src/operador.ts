let input1 = document.getElementById('campo1') as HTMLInputElement; 
let input2 = document.getElementById('campo2') as HTMLInputElement;
let button = document.getElementById('button');
let operador = document.getElementById('operador') as HTMLInputElement;
let resultado = document.getElementById('resultado');
let somenteNumeros = new RegExp('[^0-9]', 'g');

let toNumber=function (value: number) {
    let number = value.toFixed(somenteNumeros, "");
    number = parseInt(number);
    if(isNaN(number))
    number = 0;
    return number;
} 

function Numeros(any: any) {
    any.target.value = toNumber(any.target.value);
}

function onInput(event: undefined) {
    let input1 = toNumber(campo1.value);
    let input2 = toNumber(campo2.value);
    let calc = num1 + "" + operador.value + "" + num2;
    resultado.textContent = calc + '=' + eval(calc);
}

campo1.addEventListener("input", somenteNumeros);
campo2.addEventListener("input", somenteNumeros);

campo1.addEventListener("input", onInput);
campo2.addEventListener("input", onInput);
operador.addEventListener("input", onInput);

onInput();
#operador{
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    -o-appearance: none;
}

-ms-expand {
    none;
}
