let velocidade = 80;

while (velocidade > 0) {
    alert("O carro está a " + velocidade + "Km/h");
    velocidade -= 20;
    alert("Dominuindo 20Km/h...");

    if (velocidade == 40) {
        break;
    }
}

alert("O carro parou");