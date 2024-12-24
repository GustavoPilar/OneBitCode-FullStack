let escolha = 0;
const nome = prompt("Digite o seu primeiro nome:");
const sobrenome = prompt("Digite o seu sobrenome:");
const idade = prompt("Digite a sua idade:");

do {
    escolha = parseInt(prompt(
        "Escolha uma opção:\n" +
        "[1] - Ver primeiro nome\n" +
        "[2] - Ver sobrenome\n" +
        "[3] - Ver nome completo\n" +
        "[4] - Ver se é maior ou menor de idade\n" +
        "[5] - Sair"
    ));

    switch (escolha) {
        case 1: 
            alert("Primeiro nome: " + nome);
            break;
        case 2:
            alert("Sobrenome: " + sobrenome);
            break;
        case 3:
            alert("Nome completo: " + nome + " " + sobrenome);
            break;
        case 4:
            if (idade < 18) {
                alert("Você é menor de idade!");
            }
            else {
                alert("Você é maior de idade!");
            }
            break;
        case 5:
            alert("Volte sempre! :D");
            break;
        default:
            alert("Você escolheu um valor inválido. Escolha um valor entre 1 e 5");
    }
} while (escolha != 5);