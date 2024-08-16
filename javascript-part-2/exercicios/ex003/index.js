function areaTriangulo(base, altura) {
    return `A area do triangulo é ${((base * altura) / 2).toFixed(2)}`;
}

function areaRetangulo(base, altura) {
    return `A area do retângulo é ${(base * altura).toFixed(2)}`;
}

function Areaquadrado(lado) {
    return `A area do quadrado de ${lado} é ${Math.pow(lado, 2).toFixed(2)}`;
}

function areaTrapezio(baseMaior, baseMenor, altura) {
    return `Area do trapézio é ${(((baseMaior + baseMenor) * altura) / 2).toFixed(2)}`;
}

function areaCirculo(raio) {
    return `A area do circulo é ${(Math.PI * Math.pow(raio, 2)).toFixed(2)}`;
}

let escolha;

do {
    escolha = parseInt(prompt(
        "Calculadora Geométrica\n\n" +
        "Escolha uma opção:\n" +
        "[1] - Area do Triângulo\n" +
        "[2] - Area do Retângulo\n" +
        "[3] - Area do Quadrado\n" +
        "[4] - Area do Trapézio\n" +
        "[5] - Area do Círculo\n" +
        "[6] - Sair"
    ));

    switch(escolha) {
        case 1:
            const baseTriangulo = parseFloat(prompt(
                "Digite a base:"
            ));
            const alturaTriagulo = parseFloat(prompt(
                "Digite a altura:"
            ));

            alert(areaTriangulo(baseTriangulo, alturaTriagulo));
            break;
        case 2:
            const baseRetangulo = parseFloat(prompt(
                "Digite a base:"
            ));
            const alturaRetangulo = parseFloat(prompt(
                "Digite a altura:"
            ));
            
            alert(areaRetangulo(baseRetangulo, alturaRetangulo));
            break;
        case 3:
            const lado = parseFloat(prompt(
                "Digite o valor de um dos lados:"
            ));

            alert(Areaquadrado(lado));
            break;
        case 4:
            const baseMenor = parseFloat(prompt(
                "Digite a base menor:"
            ));
            const baseMaior = parseFloat(prompt(
                "Digite a base maior:"
            ));
            const alturaTrapezio = parseFloat(prompt(
                "Digite a altura:"
            ));
            
            alert(areaTrapezio(baseMaior, baseMenor, alturaTrapezio));
            break;
        case 5:
            const raio = parseFloat(prompt(
                "Digite o raio:"
            ));

            alert(areaCirculo(raio));
            break;
        case 6:
            alert("Saindo...");
            break;
        default:
            alert("Opção inválida. Escolha entre 1 e 6.");
    }
} while (escolha != 6);

