const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const subminBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

let action = '+'

plusBtn.onclick = function() {
    action = '+'
}

minusBtn.onclick = function() {
    action = '-'
}

multiplyBtn.onclick = function() {
    action = '*'
}

divideBtn.onclick = function() {
    action = '/'
}

function printResult(result) {
    if(result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'lightgreen'
    }
    resultElement.textContent = result;
}

subminBtn.onclick = function() {
    if(action == '+') {
        const result = Number(input1.value) + Number(input2.value)
        printResult(result);
    }

    if(action == '-') {
        const result = Number(input1.value) - Number(input2.value)
        printResult(result);
    }

    if(action == '*') {
        const result = Number(input1.value) * Number(input2.value)
        printResult(result);
    }

    if(action == '/') {
        const result = Number(input1.value) / Number(input2.value)
        printResult(result);
    }
}