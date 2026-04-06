function saudacao(nome) {
    if (!nome) {
        console.log("Olá, visitante!");
        return;
    }

    let mensagem = "Olá, " + nome + "! Bem-vindo ao projeto.";
    console.log(mensagem);
}

function soma(a, b) {
    return a + b;
}

function listarNumeros() {
    for (let i = 1; i <= 5; i++) {
        console.log("Número:", i);
    }
}

const usuario = "João";

saudacao(usuario);

const resultado = soma(10, 20);
console.log("Resultado da soma:", resultado);

listarNumeros();