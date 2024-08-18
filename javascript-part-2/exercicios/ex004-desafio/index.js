// Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas.
// Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.

const vagas = [];

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice) {
        //1 . nome, quantidade de candidatos
        textoFinal += indice + ". ";
        textoFinal += vaga.mostrar();
    }, "");
    
    alert(vagasEmTexto);
}

let opcao;

// Menu
function menu() {
    // Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema:
    // Listar vagas disponíveis
    // Ver uma vaga
    // Criar um nova vaga
    // Excluir uma vaga
    // Inscrever um candidato em uma vagaF
    // Sair
    let escolha = parseInt(prompt(
        "Vagas de empregos disponíveis: " + vagas.length + "\n\n" +
        "Escolha uma opção:\n" +
        "[1] - Vagas de empregos\n" +
        "[2] - Pesquisar uma vaga pelo índice\n" +
        "[3] - Adicionar uma vaga de emprego\n" +
        "[4] - Inscrever um candidato\n" +
        "[5] - Excluir vaga\n" +
        "[6] - Sair"
    ));
    return escolha;
}

do {
    opcao = menu();
    let listaVagas = "";
    for (let i = 0; i < vagas.length; i++) {
        listaVagas += "[" + (i + 1) + "] - " + vagas[i].mostrar() + "\n\n";
    }

    switch (opcao) {
        case 1:
            // A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
            if (vagas.length === 0) {
                alert("Não há vagas disponíveis no momento...");
            }
            else {
                alert(
                    "Vagas:\n\n" + listaVagas
                );
            };
            break;
        case 2:
            // A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
            if (vagas.length === 0) {
                alert("Não há vagas disponíveis no momento...");
            } else {
                const indiceVaga = parseInt(prompt(
                    "Dígite o número referente à vaga"
                ));

                if (vagas[indiceVaga - 1].candidatos.length != 0) {
                    let listaCandidatos = "";
                    for (let i = 0; i < vagas[indiceVaga - 1].candidatos.length; i++) {
                        listaCandidatos += "[" + (i + 1) + "] - " + vagas[indiceVaga - 1].candidatos[i].apresentar() + "\n\n";
                    }

                    alert(
                        vagas[indiceVaga - 1].mostrar() +
                        "\n\nCandidatos:\n" +
                        listaCandidatos
                    );
                }
                else {
                    alert(
                        vagas[indiceVaga - 1].mostrar() +
                        "\n\nSeja o primeiro a se candidatar!"
                    );
                }
            };
            break;
        case 3:
            // A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
            const vaga = {
                candidatos: [],
                mostrar() {
                    return "Vaga: " + this.nome +
                        "\nQuantidade de candidatos: " + this.candidatos.length +
                        "\nData limite: " + this.dataLimite +
                        "\nLocal: " + this.local +
                        "\nDescrição: " + this.descricao;
                }
            };

            vaga.nome = prompt("Nome da vaga:");
            vaga.dataLimite = prompt("Data limite (dd/mm/yyyy):");
            vaga.local = prompt("Local da vaga (Cidade/UF):");
            vaga.descricao = prompt("Descrição:");

            const confirmarAdicionarvaga = confirm("Você deseja adicionar essa vaga?\n" + vaga.mostrar());

            if (confirmarAdicionarvaga) {
                vagas.push(vaga);
                alert("Vaga adicionada.");
            }
            else {
                alert("Vaga não adicionada.");
            }

            break;
        case 4:
            // A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
            if (vagas.length === 0) {
                alert("Não há vagas disponíveis.")
                break;
            }
            const candidato = {
                apresentar() {
                    return "Candidato: " + this.nome +
                        "\nIdade: " + this.idade +
                        "\nCidade: " + this.cidade +
                        "\nEscolaridade: " + this.escolaridade
                }
            };
            candidato.nome = prompt("Nome do candidato:");
            candidato.idade = parseInt(prompt("Idade: "));
            candidato.cidade = prompt("Cidade que mora:");
            candidato.escolaridade = prompt("Escolaridade:");

            const numeroVaga = parseInt(prompt(
                "Digite o número da vaga:"
            ));

            const confirmarCandidatura = confirm(
                "Deseja canditar:\n" +
                candidato.apresentar() + "\n\n" +
                vagas[numeroVaga - 1].mostrar()
            );

            if (confirmarCandidatura) {
                vagas[numeroVaga - 1].candidatos.push(candidato);
            }
            break;
        case 5:
            // A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la
            if(vagas.length === 0) {
                alert("Não há vagas para excluir.");
                break;
            }

            const numeroVagaExcluir = parseInt(prompt(
                "Digite o número da vaga:\n[0] - Cancelar\n\n" + listaVagas
            ));

            let confirmarExclusao = false;
            
            if (numeroVagaExcluir === 0) {
                break;
            }

            if(vagas.length === 1) {
                confirmarExclusao = confirm(
                    "Deseja exlcuir:\n" +
                    vagas[numeroVagaExcluir - 1].mostrar()
                );
                if (confirmarExclusao) {
                    vagas.pop();
                    alert("Excluindo...");
                }
                break;
            } 
            else {
                confirmarExclusao = confirm(
                    "Deseja exlcuir:\n" +
                    vagas[numeroVagaExcluir - 1].mostrar()
                );
                if (confirmarExclusao) {
                    vagas.splice(numeroVagaExcluir - 1, numeroVagaExcluir - 1);
                    alert("Excluindo...");
                }
            }
            break;
        case 6:
            const confirmarSair = confirm("Deseja mesmo sair?");

            if (!confirmarSair) {
                opcao = 7;
            }

            break;
        case 7:
            break;
        default:
            alert("Valor inválido. Escolha entre 1 e 2");
    }
} while (opcao != 6);