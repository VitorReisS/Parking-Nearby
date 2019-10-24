const Veiculo_Diario = require('./veiculo_diario')
const errorHandler = require('../common/errorHandler')

Veiculo_Diario.methods(['get', 'post', 'put', 'delete'])
Veiculo_Diario.updateOptions({ new: true, runValidators: true })
Veiculo_Diario.after('post', errorHandler).after('put', errorHandler)

module.exports = Veiculo_Diario