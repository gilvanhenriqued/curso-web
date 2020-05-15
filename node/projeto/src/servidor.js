const porta = 3003
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancodedados')

// toda requisição passará por esse middware para verificar se está no formato urlencoded
// se estiver, o body-parser converterá para objeto para poder ser acessado pela função
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res) => {
    res.send(bancoDeDados.getProdutos()) //send() já converte para JSON
})

app.get('/produtos/:id', (req, res) => {
    res.send(bancoDeDados.getProduto(req.params.id)) // passa o id da requisição por parametro
})

app.post('/produtos', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON 
})

app.put('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON 
})

app.delete('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.deleteProduto(req.params.id)
    res.send(produto) //JSON 
})

app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}.`)
})

// usando o app.use() toda requisição por qualquer caminho passa por aqui
/* app.use((req, res, next) => {
    console.log("Testando o middware")
    next()
})
 */