const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheres = f => f.genero == 'F'
const chineses = f => f.pais == 'China'
const menorSalario = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario : funcionarioAtual
}

axios.get(url).then(response => { 
    const funcionarios = response.data

    // mulher chinesa com o menor salário
    console.log(funcionarios.filter(mulheres).filter(chineses).reduce(menorSalario))
})

