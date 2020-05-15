// operador ... rest(juntar) / spread(espalhar)
// usar o rest como parâmetro de função 

// spread com objeto
const funcionario = {nome: "Maria", salario: 5550.00}
const clone = {idade: 50, ...funcionario}

// spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = [...grupoA, 'Alex', 'Gilvan']