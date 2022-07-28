"use strict";
let input1 = document.getElementById('campo1');
let input2 = document.getElementById('campo2');
let button = document.getElementById('button');
let operador = document.getElementById('operador');
let resultado = document.getElementById('resultado');
let somenteNumeros = new RegExp('[^0-9]', 'g');
let toNumber = function (value) {
    let number = value.toFixed(somenteNumeros, '');
    number = parseInt(number);
    if (isNaN(number))
        number = 0;
    return number;
};
function Numeros(any) {
    any.target.value = toNumber(any.target.value);
}
function onInput(event) {
    let input1 = toNumber(input2.value);
    let input2 = toNumber(input2.value);
    let calc = num1 + '' + operador.value + '' + num2;
    resultado.textContent = calc + '=' + eval(calc);
}
input1.addEventListener('input', somenteNumeros);
input2.addEventListener('input', somenteNumeros);
input1.addEventListener('input', onInput);
input2.addEventListener('input', onInput);
operador.addEventListener('input', onInput);
onInput();
#operador;
{
    appearance: none;
    -moz - appearance;
    none;
    -webkit - appearance;
    none;
    -o - appearance;
    none;
}
select: : -ms - expand;
{
    display: none;
}
/*
<input class="input" id="input1" type="number"/>
        <label><select id="operador"></label>
            <option value="+" selected>+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%"></option>
        </select>
        <input class="input2" id="input2" type="number"/>
        <span id="resultado"></span>
}
*/ 
