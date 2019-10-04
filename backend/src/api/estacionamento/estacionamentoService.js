const Estacionamento = require('./estacionamento')

Estacionamento.methods(['get', 'post', 'put', 'delete'])
Estacionamento.updateOptions({ new: true, runValidators: true })

module.exports = Estacionamento