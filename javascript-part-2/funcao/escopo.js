let pokemon = "Chamander";

function evoluir() {
    pokemon = "Charmaleon";
}

console.log(pokemon);
evoluir();
console.log(pokemon);

function criarAnimal() {
    const animal = "Gato";
    return animal;
};

const animal = criarAnimal();
console.log(animal);

function avaliarNota(nota) {
    if (nota > 60) {
        // var pode ser visto pelo escopo de fora, não é recomendado
        // isso apenas em condições, porém em funções diretas não.
        var aprovado = true;
        let situcao = "Aprovado";
    }
    else {
        var aprovado = false;
        let situcao = "Reprovado";
    }

    console.log(nota);
    console.log(aprovado);
    console.log(situcao);
}

avaliarNota(83);
avaliarNota(49)
