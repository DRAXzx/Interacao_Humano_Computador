let operation = '+';

function toggleOperation() {
    const operationList = document.getElementById('operation-list');
    operationList.classList.toggle('hidden');
}

function setOperation(op) {
    operation = op;
    document.getElementById('selected-operation').innerText = 
        op === '+' ? 'Somar' :
        op === '-' ? 'Subtrair' :
        op === '*' ? 'Multiplicar' : 'Dividir';
    toggleOperation(); 
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Por favor, preencha os dois números');
        return;
    }

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Divisão por zero não permitida');
                return;
            }
            result = num1 / num2;
            break;
    }

    document.getElementById('result').innerText = `Resultado: ${result}`;
}
