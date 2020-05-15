// importa o modulo filesystem interno do node
const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// ler de modo sincrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

// ler de modo assincrono
fs.readFile(caminho, 'utf-8', (erro, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

// ler arquivo JSON de modo assincrono (mais simples)
const config = require('./arquivo.json')
console.log(config.db)

// ler uma pasta inteira com filesystem
fs.readdir(__dirname, (erro, arquivos) => {
    console.log('Conteúdo da pasta: ')
    console.log(arquivos)
})
