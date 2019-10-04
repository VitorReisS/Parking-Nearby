const Funcionario = require('./funcionario')

Funcionario.methods(['get', 'post', 'put', 'delete'])
Funcionario.updateOptions({ new: true, runValidators: true })

module.exports = Funcionario