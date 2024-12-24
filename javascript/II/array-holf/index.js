const personagens = [
    { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
    { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
    { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
    { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
    { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
    { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
];

// map -> cria um novo array (mapeamento de um array existe, para outro array)
// basicamente passa por todos os elementos do array

// não usando map
const nomes = [];

for (let i = 0; i < personagens.length; i++) {
    nomes.push(personagens[i].nome);
}
console.log(nomes);

// usando map
const nomesMap = personagens.map(function(personagem) {
    return personagem.nome;
});
console.log(nomesMap);

// filter -> filtra o novo array

// não usando filter
const orcsFor = [];

for (let i = 0; i < personagens.length; i++) {
    if (personagens[i].raca === "Orc") {
        orcsFor.push(personagens[i]);
    }
}
console.log(orcsFor);

// usando filter
const orcsFilter = personagens.filter(function (personagem) {
    return personagem.raca === "Orc";
});
console.log(orcsFilter);

// reduce -> transforma um array em um outro valor (array, objeto, numero, etc)
const nivelTotal = personagens.reduce(function (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel;
}, 0);
console.log(nivelTotal);

const racas = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem);
    } else {
        valorAcumulado[personagem.raca] = [personagem];
    }

    return valorAcumulado;
}, {});

console.log(racas);

// sort -> ordenar os elementos

// 1, 2, 4, 7, 3, 0

const personagensOrdenados = personagens.slice().sort(function (a, b) {
    return b.nivel - a.nivel;
});

console.log(personagens);
console.log(personagensOrdenados);