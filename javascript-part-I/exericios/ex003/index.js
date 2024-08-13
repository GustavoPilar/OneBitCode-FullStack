const metros = parseFloat(prompt("Digite o valor (m)?"));
const medida = parseInt(prompt(
    "Escolha uma medida para converter:\n" +
    "[0] - Sair\n" +
    "[1] - Milímetro (mm)\n" +
    "[2] - Centímetros (cm)\n" +
    "[3] - Decímetros (dm)\n" +
    "[4] - Decametro (dam)\n" +
    "[5] - Hectrometro (hm)\n" +
    "[6] - quilômetros (km)\n"
));

switch (medida) {
    case 1:
        alert("O valor de " + metros + "m  em milímetro é de " + (metros * 1000) + "mm");
        break;
    case 2:
        alert("O valor de " + metros + "m  em centímetros é de " + (metros * 100) + "cm");
        break;
    case 3:
        alert("O valor de " + metros + "m  em decímetro é de " + (metros * 10) + "dm");
        break;
    case 4:
        alert("O valor de " + metros + "m  em decametro é de " + (metros / 10) + "dam");
        break;
    case 5:
        alert("O valor de " + metros + "m  em hectômetro é de " + (metros / 100) + "hm");
        break;
    case 6:
        alert("O valor de " + metros + "m  em kilômetro é de " + (metros / 1000) + "km");
        break;
    default:
        alert("Volte sempre!");
}