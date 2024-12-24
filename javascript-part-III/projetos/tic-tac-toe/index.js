const jogadores = [];
const jogo = [['', '', ''], ['', '', ''], ['', '', '']];
const span = document.getElementById('jogador');
let turno = document.getElementById('preenchido');

document.getElementById('btn-jogar').addEventListener('click', function() {
    const jogador1 = document.getElementById('jogador1').value;
    const jogador2 = document.getElementById('jogador2').value;
    
    if (jogador1 === '' || jogador2 === '') {
        return;
    }

    document.getElementById('jogadores').style.display = 'none';
    document.getElementById('btn-jogar').style.display = 'none';
    document.getElementById('preencher').style.display = 'none';
    document.getElementById('btn-reiniciar').style.display = 'inline';
    turno.style.display = 'block';
    document.getElementById('quadrados-jogo').style.display = 'block';
    jogadores.push(jogador1);
    jogadores.push(jogador2);
    
    span.innerText = jogadores[0];
    span.dataset.jogador = jogadores[0];
});

function desativar(quadrado) {
    if (quadrado.dataset.valor != '') {
        return true;
    }
}

document.getElementById('linha1coluna1').addEventListener('click', function() {
    if (desativar(this)) {
        return;
    }

    if (span.dataset.jogador === jogadores[0]) {
        this.innerText = 'X';
        this.dataset.valor = 'X'
        this.style.backgroundColor = '#2e969f';
        span.innerText = jogadores[1];
        span.dataset.jogador = jogadores[1];
        jogo[0][0] = jogadores[0];
    }
    else {
        this.innerText = 'O';
        this.dataset.valor = 'O';
        this.style.backgroundColor = '#a52d4f';
        span.innerText = jogadores[0];
        span.dataset.jogador = jogadores[0];
        jogo[0][0] = jogadores[1];
    }

    verificar();
});

document.getElementById('linha1coluna2').addEventListener('click', function() {
    if (desativar(this)) {
        return;
    }
    
    if (span.dataset.jogador === jogadores[0]) {
        this.innerText = 'X';
        this.dataset.valor = 'X'
        this.style.backgroundColor = '#2e969f';
        span.innerText = jogadores[1];
        span.dataset.jogador = jogadores[1];
        jogo[0][1] = jogadores[0];
    }
    else {
        this.innerText = 'O';
        this.dataset.valor = 'O';
        this.style.backgroundColor = '#a52d4f';
        span.innerText = jogadores[0];
        span.dataset.jogador = jogadores[0];
        jogo[0][1] = jogadores[1];
    }

    verificar();
});

document.getElementById('linha1coluna3').addEventListener('click', function() {
    if (desativar(this)) {
        return;
    }
    
    if (span.dataset.jogador === jogadores[0]) {
        this.innerText = 'X';
        this.dataset.valor = 'X'
        this.style.backgroundColor = '#2e969f';
        span.innerText = jogadores[1];
        span.dataset.jogador = jogadores[1];
        jogo[0][2] = jogadores[0];
    }
    else {
        this.innerText = 'O';
        this.dataset.valor = 'O';
        this.style.backgroundColor = '#a52d4f';
        span.innerText = jogadores[0];
        span.dataset.jogador = jogadores[0];
        jogo[0][2] = jogadores[1];
    }

    verificar();
});

document.getElementById('linha2coluna1').addEventListener('click', function() {
    if (desativar(this)) {
        return;
    }
    
    if (span.dataset.jogador === jogadores[0]) {
        this.innerText = 'X';
        this.dataset.valor = 'X'
        this.style.backgroundColor = '#2e969f';
        span.innerText = jogadores[1];
        span.dataset.jogador = jogadores[1];
        jogo[1][0] = jogadores[0];
    }
    else {
        this.innerText = 'O';
        this.dataset.valor = 'O';
        this.style.backgroundColor = '#a52d4f';
        span.innerText = jogadores[0];
        span.dataset.jogador = jogadores[0];
        jogo[1][0] = jogadores[1];
    }

    verificar();
});

document.getElementById('linha2coluna2').addEventListener('click', function() {
    if (desativar(this)) {
        return;
    }
    
    if (span.dataset.jogador === jogadores[0]) {
        this.innerText = 'X';
        this.dataset.valor = 'X'
        this.style.backgroundColor = '#2e969f';
        span.innerText = jogadores[1];
        span.dataset.jogador = jogadores[1];
        jogo[1][1] = jogadores[0];
    }
    else {
        this.innerText = 'O';
        this.dataset.valor = 'O';
        this.style.backgroundColor = '#a52d4f';
        span.innerText = jogadores[0];
        span.dataset.jogador = jogadores[0];
        jogo[1][1] = jogadores[1];
    }

    verificar();
});

document.getElementById('linha2coluna3').addEventListener('click', function() {
    if (desativar(this)) {
        return;
    }
    
    if (span.dataset.jogador === jogadores[0]) {
        this.innerText = 'X';
        this.dataset.valor = 'X'
        this.style.backgroundColor = '#2e969f';
        span.innerText = jogadores[1];
        span.dataset.jogador = jogadores[1];
        jogo[1][2] = jogadores[0];
    }
    else {
        this.innerText = 'O';
        this.dataset.valor = 'O';
        this.style.backgroundColor = '#a52d4f';
        span.innerText = jogadores[0];
        span.dataset.jogador = jogadores[0];
        jogo[1][2] = jogadores[1];
    }

    verificar();
});

document.getElementById('linha3coluna1').addEventListener('click', function() {
    if (desativar(this)) {
        return;
    }
    
    if (span.dataset.jogador === jogadores[0]) {
        this.innerText = 'X';
        this.dataset.valor = 'X'
        this.style.backgroundColor = '#2e969f';
        span.innerText = jogadores[1];
        span.dataset.jogador = jogadores[1];
        jogo[2][0] = jogadores[0];
    }
    else {
        this.innerText = 'O';
        this.dataset.valor = 'O';
        this.style.backgroundColor = '#a52d4f';
        span.innerText = jogadores[0];
        span.dataset.jogador = jogadores[0];
        jogo[2][0] = jogadores[1];
    }

    verificar();
});

document.getElementById('linha3coluna2').addEventListener('click', function() {
    if (desativar(this)) {
        return;
    }
    
    if (span.dataset.jogador === jogadores[0]) {
        this.innerText = 'X';
        this.dataset.valor = 'X'
        this.style.backgroundColor = '#2e969f';
        span.innerText = jogadores[1];
        span.dataset.jogador = jogadores[1];
        jogo[2][1] = jogadores[0];
    }
    else {
        this.innerText = 'O';
        this.dataset.valor = 'O';
        this.style.backgroundColor = '#a52d4f';
        span.innerText = jogadores[0];
        span.dataset.jogador = jogadores[0];
        jogo[2][1] = jogadores[1];
    }

    verificar();
});

document.getElementById('linha3coluna3').addEventListener('click', function() {
    if (desativar(this)) {
        return;
    }
    
    if (span.dataset.jogador === jogadores[0]) {
        this.innerText = 'X';
        this.dataset.valor = 'X';
        this.style.backgroundColor = '#2e969f';
        span.innerText = jogadores[1];
        span.dataset.jogador = jogadores[1];
        jogo[2][2] = jogadores[0];
    }
    else {
        this.innerText = 'O';
        
        this.dataset.valor = 'O';
        this.style.backgroundColor = '#a52d4f';
        span.innerText = jogadores[0];
        span.dataset.jogador = jogadores[0];
        jogo[2][2] = jogadores[1];
    }

    verificar();
});

function verificar() {
    // LINHAS RETAS HORIZONTAIS
    if (jogo[0][0] != '' && jogo[0][0] === jogo[0][1] && jogo[0][0] === jogo[0][2]) {
        terminar(jogo[0][0]);
    }
    if (jogo[1][0] != '' && jogo[1][0] === jogo[1][1] && jogo[1][0] === jogo[1][2]) {
        terminar(jogo[1][0]);
    }
    if (jogo[2][0] != '' && jogo[2][0] === jogo[2][1] && jogo[2][0] === jogo[2][2]) {
        terminar(jogo[2][0]);
    }

    // LINHAS RETAS VERTICAIS
    if (jogo[0][0] != '' && jogo[0][0] === jogo [1][0] && jogo[0][0] === jogo[2][0]) {
        terminar(jogo[0][0]);
    }
    if (jogo[0][1] != '' && jogo[0][1] === jogo [1][1] && jogo[0][1] === jogo[2][1]) {
        terminar(jogo[0][1]);
    }
    if (jogo[0][2] != '' && jogo[0][2] === jogo [1][2] && jogo[0][2] === jogo[2][2]) {
        terminar(jogo[0][2]);
    }

    // LINHAS DIAGONAIS
    if (jogo[0][0] != '' && jogo[0][0] === jogo [1][1] && jogo[0][0] === jogo[2][2]) {
        terminar(jogo[0][0]);
    }
    if (jogo[0][2] != '' && jogo[0][2] === jogo [1][1] && jogo[0][2] === jogo[2][0]) {
        terminar(jogo[0][2]);
    }
}

function terminar(vencedor) {
    turno.style.display = 'none';
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('vencedor').innerText = vencedor;
}

document.getElementById('btn-reiniciar').addEventListener('click', function() {
    location.reload();
})
