const personagem = prompt("Nome do personagem:");
const ataquePersonagem = parseFloat(prompt("Poder de ataque de " + personagem + ":"));

const inimigo = prompt("Nome do inimigo:");
let vidaInimigo = parseFloat(prompt("Quantidade de vida de " + inimigo + ":"));
const defesaInimigo = parseFloat(prompt("Defesa de " + inimigo + ":"));
const escudoInimigo = confirm(inimigo + " usa escudo?");

let dano = 0;

if (ataquePersonagem > defesaInimigo && !escudoInimigo) {
    dano = ataquePersonagem - defesaInimigo;
}
else if (ataquePersonagem > defesaInimigo && escudoInimigo) {
    dano = (ataquePersonagem - defesaInimigo) / 2;
}

vidaInimigo -= dano;

alert(
    "Ataque de " + personagem + ": " + ataquePersonagem + "\n" +
    "Defesa de " + inimigo + ": " + defesaInimigo + "\n" +
    "Dano causado: " + dano + "\n" +
    "Pontos de vida de " + inimigo + ": " + vidaInimigo
);

if (vidaInimigo <= 0) {
    alert("Parabéns!\nVocê derroutou " + inimigo);
}