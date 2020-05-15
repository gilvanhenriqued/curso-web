const schedule = require('node-schedule')

// executa uma tarefa de 5 em 5 segundos, qualquer minuto, 13 horas, qualquer dia, qualquer mês, e no sábado.
const tarefa1 = schedule.scheduleJob('*/5 * 13 * * 6', function(){
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

// temporizador padrão do JS para cancelar a tarefa1
setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1...')
}, 20000)

// novo temporizador Schedule
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,7)]
regra.hour = 13
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})