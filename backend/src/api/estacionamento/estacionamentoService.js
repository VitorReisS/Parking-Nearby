const Estacionamento = require('./estacionamento')
const errorHandler = require('../common/errorHandler')

Estacionamento.methods(['get', 'post', 'put', 'delete'])
Estacionamento.updateOptions({ new: true, runValidators: true })
Estacionamento.after('post', errorHandler).after('put', errorHandler)

module.exports = Estacionamento