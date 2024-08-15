function ola() {
    console.log("Olá, mundo");
}

ola();

function dobro(x) {
    console.log("O dobro de " + x + " é " + (x*2));
};
dobro(5);
dobro();

// Podemos passar um valor padrão;
function dizerOla(nome = "mundo") {
    console.log("Olá, " + nome + "!");
}
dizerOla("Gustavo");
dizerOla();

function soma(a, b) {
    console.log("Resultado da soma é " + (a+b));
}
soma(7, 3);

function criarUsuario(nome, email, senha, genero) {
    const usuario = {
        nome,
        email,
        senha,
        genero
    };

    console.log(usuario);
}

// Valores padrão sempre no final dos parametros
function novoUsusario(nome, email, senha = "1234", genero = "Masculino") {
    const usuario = {
        nome,
        email,
        senha,
        genero
    };

    console.log(usuario);
}

function objetoComoParametro(usuario) {
    //...
    usuario.nome
}

criarUsuario("Gustavo", "gustavo@gmail.com", "1234", "Masculino");
novoUsusario("Gustavo", "gustavo@gmail.com");

