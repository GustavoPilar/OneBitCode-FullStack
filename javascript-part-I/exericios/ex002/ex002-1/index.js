const carro1 = prompt("Digite o nome do primeiro carro: ");
const velocidadeCarro1 = parseInt(prompt("Digite a velocidade o " + carro1 + " (km/h)"));
const carro2 = prompt("Digite o nome do segundo carro");
const velocidadeCarro2 = parseInt(prompt("Digite a velocidade o " + carro2 + " (km/h)"));

if(velocidadeCarro1 > velocidadeCarro2) {
    alert(
        carro1 + ": " + velocidadeCarro1 + " Km/h" + "\n" +
        carro2 + ": " + velocidadeCarro2 + " Km/h" + "\n" +
        carro1 + " está mais rápido que " + carro2
    );
}
else if (velocidadeCarro2 > velocidadeCarro1) {
    alert(
        carro1 + ": " + velocidadeCarro1 + " Km/h" + "\n" +
        carro2 + ": " + velocidadeCarro2 + " Km/h" + "\n" +
        carro2 + " está mais rápido que " + carro1
    );
}
else {
    alert(
        carro1 + ": " + velocidadeCarro1 + " Km/h" + "\n" +
        carro2 + ": " + velocidadeCarro2 + " Km/h" + "\n" +
        "Ambos os carros, " + carro1 + " e " + carro2 + ", estão na mesma velocidade."
    );
}