// Tabuada
const numero = prompt("Digite o valor a ser multiplicado:");

let resultado = "";

for (let i = 1; i <= 20; i++) {
    resultado += " -> " + numero + " x " + i + " = " + (numero * i) + "\n";
}

alert("O resultade da tabuada de " + numero + ":\n\n" + resultado);
