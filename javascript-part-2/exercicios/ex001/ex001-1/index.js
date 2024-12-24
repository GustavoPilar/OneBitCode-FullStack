const pacientes= [];
let escolha;

do {

    let list = "";
    for (let i = 0; i < pacientes.length; i++) {
        list += (i+1) + "º - " + pacientes[i] + "\n";
    }

    if (list === "") {
        list = "Sem pacientes..."
    }

    escolha = parseInt(prompt(
        "Escolha uma das opções:\n" +
        "[1] - Consultar paciente\n" +
        "[2] - Adicionar um novo paciente\n" +
        "[3] - Sair\n\n" +
        "Lista de pacientes:\n" +
        list
    ));

    switch(escolha) {
        case 1:
            if(list === "Sem pacientes...") {
                alert("Não há paciente para ser atendido nesse momento.");
            } else {
                const atentido = pacientes.shift();
                alert("Consultando: " + atentido);
            }
            break;
        case 2:
            const paciente = prompt("Qual é o nome do paciente?");
            pacientes.push(paciente);
            break;
        case 3:
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida. Escolha entre 1 e 3");
    }
} while (escolha != 3);