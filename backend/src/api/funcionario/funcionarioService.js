const Funcionario = require('./funcionario')
const errorHandler = require('../common/errorHandler')

Funcionario.methods(['get', 'post', 'put', 'delete'])
Funcionario.updateOptions({ new: true, runValidators: true })
Funcionario.after('post', errorHandler).after('put', errorHandler)

module.exports = Funcionario