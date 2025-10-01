// Arquivo principal do projeto Hello World em Node.js

console.log("Hello World!");
console.log("Bem-vindo ao Node.js!");

// Função para exibir uma mensagem personalizada
function exibirMensagem(nome) {
  return `Olá, ${nome}! Este é seu primeiro projeto Node.js.`;
}

// Exemplo de uso da função
const nomeUsuario = "Desenvolvedor";
console.log(exibirMensagem(nomeUsuario));

// Informações sobre o ambiente Node.js
console.log(`\nInformações do sistema:`);
console.log(`Versão do Node.js: ${process.version}`);
console.log(`Plataforma: ${process.platform}`);
console.log(`Arquitetura: ${process.arch}`);

// Exemplo simples de servidor HTTP (comentado)
/*
const http = require('http');

const servidor = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end('<h1>Hello World do Node.js!</h1><p>Seu servidor está funcionando!</p>');
});

const porta = 3000;
servidor.listen(porta, () => {
    console.log(`\nServidor rodando em http://localhost:${porta}`);
});
*/
