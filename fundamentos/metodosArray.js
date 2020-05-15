const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: false},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: false},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

// função aplica desconto em todos os produtos do array (map)
const desconto = produto => produto.preco -= 0.1*produto.preco 
// função pesquisa produtos baratos (filter)
const baratos = produto => produto.preco <= 500
// função verifica se há produtos frágeis no array de compras (reduce)
const isFrageis = (resultado, produto) => resultado || produto
// reduce pode ser usado para calcular a idade média dos usuarios, já que retorna um valor

console.log('Aplicar desconto (map): ' + produtos.map(desconto))
console.log('Produtos baratos (filter): ' + produtos.filter(baratos))
console.log('Há produtos frágeis (reduce)? ' + produtos.map(a => a.fragil).reduce(isFrageis))

