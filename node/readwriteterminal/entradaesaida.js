process.stdout.write('Informe o seu nome: ')
process.stdin.on('data', data => {
    const nome = data.toString().replace('\r\n', '') // replace para tirar o enter que vai junto

    process.stdout.write(`Fala ${nome}!!\r\n`)
    process.exit()
})

