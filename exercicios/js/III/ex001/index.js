function addInput() {

    if (!inputsFull()) {
        alert('É necessário que todos os campos sejam preenchidos...');
        return;
    }

    const player = {
        name: '',
        position: '',
        number: 0
    }
    
    player.name = document.getElementById('playerName').value;
    player.number = document.getElementById('playerNumber').value;
    player.position = document.getElementById('playerPosition').value;

    const confirmPlayer = confirm(
        'Deseja escalar:\nJogador: ' + player.name + '\nCamisa: ' + player.number + '\nPosição: ' + player.position
    )

    if (confirmPlayer) {
        document.getElementById('playerName').value = '';
        document.getElementById('playerNumber').value = '';
        document.getElementById('playerPosition').value = '';
        
        const playersSection = document.getElementById('players-list');
        
        const fieldsetPlayer = document.createElement('fieldset');
        fieldsetPlayer.id = player.number;
        const legend = document.createElement('legend');

        const newUl = document.createElement('ul');
        const newLiNumber = document.createElement('li');
        const newLiPosition = document.createElement('li');
        
        legend.textContent = player.name;
        
        const showPlayerNumber = `Camisa: ${player.number}`;
        const showPlayerPosition = `Posição: ${player.position}`;

        newLiNumber.append(showPlayerNumber);
        newLiPosition.append(showPlayerPosition);
        newUl.append(newLiNumber, newLiPosition);
        fieldsetPlayer.append(legend, newUl);
        playersSection.appendChild(fieldsetPlayer);
    }
    else {
        return;
    }
}

function inputsFull() {
    if (document.getElementById('playerName').value == '' || document.getElementById('playerName').value == null) {
        return false;
    }
    else if (document.getElementById('playerNumber').value == '' || document.getElementById('playerNumber').value == null) {
        return false;
    }
    else if (document.getElementById('playerPosition').value == '' || document.getElementById('playerPosition').value == null) {
        return false;
    }

    return true;
}

function removePlayer() {
    const playerNumberInput = document.getElementById('removePlayer').value;

    const players = document.getElementById('players-list');
    players.removeChild(document.getElementById(playerNumberInput));

}
