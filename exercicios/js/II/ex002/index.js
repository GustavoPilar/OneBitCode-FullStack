const imoveis = [];
let escolha;

do {
    escolha = parseInt(prompt(
        `Imóveis cadastrados: ${imoveis.length}\n\nCadastro de Imóvel:\n[1] - Ver imóveis cadastrados\n[2] - Cadastrar um imóvel\n[3] - Sair`
    ));

    switch (escolha) {
        case 1:
            //mostrar todos os imáveis
            if (imoveis.length <= 0) {
                alert("Não há nenhuma imóvel disponível");
            }
            else {
                for(let i = 0; i < imoveis.length; i++) {
                    alert(
                        "Imóvel " + (i + 1) + ":\n" + imoveis[i].apresentar()
                    );
                };
            };
            break;
        case 2:
            // adicionar um imóvel
            // titular; qtd-quartos; qtd-banheiro; garagem;
            const imovel = {
                apresentar() {
                    return `Titular: ${this.titular}\nQuartos: ${this.quartos}\nBanheiros: ${this.banheiros}\nGaragem: ${this.garagem}.`;
                }
            };

            imovel.titular = prompt("Nome do titular:"),
            imovel.quartos = parseInt(prompt("Quantidade de quartos:"),)
            imovel.banheiros = parseInt(prompt("Quantidade de banheiros:")),
            imovel.garagem = prompt("Possui garagem? (Sim/Não)");
            

            let confirmar = confirm("Deseja adicionar este imóvel?\n" + imovel.apresentar());

            if(confirmar) {
                imoveis.push(imovel);
                alert("Imóvel adicionado!");
            }
            else {
                alert("Imóvel não adicionado.");
            };
            break;
        case 3:
            alert("Saindo...");
            break;
        default:
            alert("Valor inválido. Digite um valor entre 1 e 3")
    }
} while (escolha != 3);