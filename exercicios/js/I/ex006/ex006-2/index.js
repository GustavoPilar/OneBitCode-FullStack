// Palindromo
let palavra = prompt("Digite uma palavra");
let aoContrario = "";

for (let i = (palavra.length - 1); i >= 0; i--) {
    aoContrario += palavra[i];
}

if (palavra === aoContrario) {
    alert("É um palindromo")
}
else {
    alert("Não é um palindromo.\n\n" +
        palavra + " !== " + aoContrario
    );
}

