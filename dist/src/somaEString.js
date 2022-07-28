"use strict";
const input = document.getElementById('string');
const input1 = document.getElementById('number1');
const input2 = document.getElementById('number2');
const button = document.getElementById('button');
function somarValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}
button === null || button === void 0 ? void 0 : button.addEventListener('click', function () {
    console.log(somarValores(1, 5));
    console.log(somarValores('Olá', ', tudo bem?'));
    console.log(somarValores('1', 5));
});
