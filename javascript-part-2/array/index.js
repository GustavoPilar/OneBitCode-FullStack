const arr = ["Frodo", "Sam", "Marry", "Pippin", "Gandalf", "Aragorn", "Legolas", "Gimli"];

console.log(arr);

// Adicionar elementos -> push
let tamanho = arr.push("Boromir");
console.log(arr);
console.log(tamanho);

// adicionar elementos no começo -> unshift
tamanho = arr.unshift("Boromir");
console.log(arr);
console.log(tamanho);

// remover elementos no final do array -> pop
let ultimoElemento = arr.pop();
console.log(arr);
console.log(ultimoElemento);

// remover elementos no começo -> shift
ultimoElemento = arr.shift();
console.log(arr);
console.log(ultimoElemento);

// pesquisar por um elemento -> includes
const inclui = arr.includes("Gandalf");
console.log(inclui);

// indexOf
const indice = arr.indexOf("Gandalf");
console.log(indice);

//cortar -> slice
const hobbits = arr.slice(0, 4);
const outros = arr.slice(-4);
console.log(arr);
console.log(hobbits);
console.log(outros);

// Concatenar -> concat
const sociedade = hobbits.concat(outros, "Boromir");
console.log(sociedade);

// Substituição de elementos -> splice
const elementosRemovidos = sociedade.splice(indice, 1, "Gandalf, o Cinzendo");
console.log(arr);
console.log(elementosRemovidos);

// Iterar sobre os elementos
for (let i = 0; i < sociedade.length; i++) {
    const elemento = sociedade[i];
    console.log(elemento + " se encontra na posição: " + i);
}