let dinheiro = parseFloat(prompt("Quantidade inicial de dinheiro disponivel:"));
let escolha;
let montante;

do {
    escolha = parseInt(prompt(
        "Dinheiro disponivel: R$" + dinheiro.toFixed(2) + "\n" +
        "[1] - Adicionar dinhheiro\n" +
        "[2] - Remover dinheiro\n" +
        "[3] - Sair"
    ));

    switch (escolha) {
        case 1:
            montante = parseFloat(prompt(
                "Digite o valor montante que será adicionado ao saldo atual:"
            ));
            dinheiro += montante;
            break;
        case 2:
            montante = parseFloat(prompt(
                "Digite o valor montante que será retirado do saldo:"
            ));
            if(montante > dinheiro) {
                alert("A quantidade deverá ser menor ou igual ao valor do saldo atual!");
            }
            else {
                dinheiro -= montante;
            }
            break;
        case 3:
            alert("Volte sempre! :D");
            break;
        default:
            alert("Você escolheu uma opção inválida. Escolha entre 1 e 3");
    }
} while (escolha != 3);