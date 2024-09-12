function adicao(a,b) {
    return a + b;
}
function subtracao(a,b) {
    return a - b;
}
function multiplicacao(a,b) {
    return a * b;
}

function divisao(a,b) {
    if (b === 0) {
        return "Erro: Divisao por zero!";
    } else {
        return a / b;
    }
    
}
function numeroPar(n){
    return n % 2 === 0 ? "É par" : "Não e par";
}
function somalntervalo(inicio,fim){
    let soma = 0;
    for(let i = inicio; i <= fim; i++){
        soma += i;
    }
    return soma;
}
function fatorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    let resultado = 1;
    for (let i = n; i > 1; i--){
        resultado *= i;
    }
    return resultado;
}
function contarVogais(string){
     let vogais = ['a','e','i','o','u'];
     let count = 0;
     for (let char of string.toLowerCase()){
        if (vogais.includes(char)){
            count++;
        }
     }
     return count;
}
console.log(adicao(5, 3)); 
console.log(subtracao(10, 7)); 
console.log(multiplicacao(4, 6)); 
console.log(divisao(15, 3)); 
console.log(divisao(10, 0)); 
console.log(numeroPar(1)); 
console.log(somalntervalo(1, 5)); 
console.log(fatorial(5)); 
console.log(contarVogais('javascript'));