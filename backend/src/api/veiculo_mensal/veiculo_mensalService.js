const Veiculo_Mensal = require('./veiculo_mensal')
const errorHandler = require('../common/errorHandler')

Veiculo_Mensal.methods(['get', 'post', 'put', 'delete'])
Veiculo_Mensal.updateOptions({ new: true, runValidators: true })
Veiculo_Mensal.after('post', errorHandler).after('put', errorHandler)

module.exports = Veiculo_Mensal