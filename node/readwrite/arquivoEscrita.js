const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

// salvando o objeto 'produto' no disco
// primeiro é preciso converter o objeto para JSON

fs.writeFile(__dirname + '/arquivoSalvo.json', JSON.stringify(produto), erro => {
    console.log(erro || 'Arquivo Salvo!')
})