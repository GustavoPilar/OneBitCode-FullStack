function escalar() {
    const nome = document.getElementById('nomeJogador').value;
    const camisa = parseInt(document.getElementById('numeroCamisa').value);
    const posicao = document.getElementById('posicaoJogador').value;

    const apresentacao = camisa + " - " + nome + " (" + posicao + ")";

    const confirmar = confirm('Deseja escalar esse jogador?\n' + apresentacao);

    if (confirmar) {

        const jogadoresList = document.getElementById('jogadores-list');

        const newLi = document.createElement('li');
        newLi.id = 'player-' + camisa;
        newLi.innerText = apresentacao;
        jogadoresList.appendChild(newLi);
    }

    // limpar os inputs
    document.getElementById('nomeJogador').value = '';
    document.getElementById('numeroCamisa').value = '';
    document.getElementById('posicaoJogador').value = '';
}

function remover() {
    const numero = document.getElementById('numeroCamisa').value;
    const jogadorRemover = document.getElementById('player-' + numero);

    const confirmacao = confirm('Remover o jogador ' + jogadorRemover.innerText + '?');

    if (confirmacao) {
        document.getElementById('jogadores-list').removeChild(jogadorRemover);
    }

    document.getElementById('nomeJogador').value = '';
    document.getElementById('numeroCamisa').value = '';
    document.getElementById('posicaoJogador').value = '';
}