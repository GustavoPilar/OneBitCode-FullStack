function calcularMedia(a, b) {
    return (a + b) / 2;
    
}
const resultado = calcularMedia(7, 2);
console.log(resultado);

function criarProduto(nome, preco) {
    const produto = {
        nome,
        preco,
        estoque: 1
    }
    return produto;
}

const notebook = criarProduto("Notebook Intel Core i3 8GB", 2500);
console.log(notebook);

function areaRetangular(base, altura) {
    return area = base * altura
}

function areaQuadrada(lado) {
    return areaRetangular(lado, lado);
}

console.log(areaRetangular(3, 5));
console.log(areaQuadrada(9));

function ola() {
    let texto = "...";
    return texto;
    texto = "olá mundo";
    console.log(text);
}

console.log(ola());

function maioridade(idade) {
    if(idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade"
    };
}

console.log(maioridade(19));
console.log(maioridade(13));