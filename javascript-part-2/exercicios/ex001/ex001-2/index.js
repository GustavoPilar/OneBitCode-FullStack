const cartas= [
    "7", "K", "3", "Ás", "Q", "5", "J", "4", "2", "6", "1",
    "Q", "2", "J", "Ás", "6", "K", "3", "4", "5", "7", "1",
    "Ás", "7", "K", "2", "J", "5", "3", "4", "6", "Q", "1"
];
let escolha;

do {

    escolha = parseInt(prompt(
        "Quantidade de cartas: " + cartas.length + 
        "\n\nEscolha uma das opções:\n" +
        "[1] - Puxar uma carta\n" +
        "[2] - Adicionar um Carta ao Baralho\n" +
        "[3] - Sair"
    ));

    switch(escolha) {
        case 1:
            const cartaNaMao = cartas.shift();
            alert("A carta em mãos é: " + cartaNaMao);
            break;
        case 2:
            const novaCarta = prompt(
                "Selecione o valor da carta:\n" +
                "[1] - Ás\n" +
                "[2] - 2\n" +
                "[3] - 3\n" +
                "[4] - 4\n" +
                "[5] - 5\n" +
                "[6] - 6\n" +
                "[7] - 7\n" +
                "[Q] - Q\n" +
                "[J] - J\n" +
                "[K] - K\n"
            ).toUpperCase();
            cartas.unshift(novaCarta);
            break;
        case 3:
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida. Escolha entre 1 e 3");
    }
} while (escolha != 3);