const nomeTurista = prompt("Qual o seu nome, turista?");
let resposta = parseInt(prompt("Você já visitou alguma cidade?\n[1] - Sim\n[2] - Não"));
let cidadesVisitadas = "";
let contagem = 0;

while(resposta !== 2) {
    contagem ++;
    const cidade = prompt("Qual o nome da cidade que você visitou?");
    cidadesVisitadas += cidade + "; ";
    resposta = parseInt(prompt("Você visitou outra cidade, também?\n[1] - Sim\n[2] - Não"))
}

alert(
    "Nome do turista: " + nomeTurista + "\n" +
    "Quantidades de cidades visitadas: " + contagem + "\n" +
    "Cidaes visitadas: " + cidadesVisitadas
);