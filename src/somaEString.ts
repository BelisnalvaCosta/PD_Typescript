const input = document.getElementById('string');
const input1 = document.getElementById('number1') as HTMLInputElement;
const input2 = document.getElementById('number2') as HTMLInputElement;
const button = document.getElementById('button');


type input = number | string;

function somarValores(input1: input, input2: input) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        return input1 + input2;
    }
}

button?.addEventListener('click', function() {    
console.log(somarValores(1, 5));
console.log(somarValores('Olá', ', tudo bem?'));
console.log(somarValores('1', 5));
});