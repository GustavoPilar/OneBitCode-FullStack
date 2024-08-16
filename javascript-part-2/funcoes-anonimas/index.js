function somar(a, b) {
    return a + b;
}

const operacao = somar;

console.log(operacao(4, 5));

const subtrair = function subtracao(a, b) {
    return a - b;
}

console.log(subtrair(5, 4));

olaMundo();
oiMundo();

function olaMundo() {
    console.log("Olá, mundo");
}

const oiMundo = function() {
    console.log("Oi, mundo");
}