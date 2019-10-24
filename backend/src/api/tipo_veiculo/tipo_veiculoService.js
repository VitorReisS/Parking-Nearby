const Tipo_Veiculo = require('./tipo_veiculo')
const errorHandler = require('../common/errorHandler')

Tipo_Veiculo.methods(['get', 'post', 'put', 'delete'])
Tipo_Veiculo.updateOptions({ new: true, runValidators: true })
Tipo_Veiculo.after('post', errorHandler).after('put', errorHandler)

module.exports = Tipo_Veiculo