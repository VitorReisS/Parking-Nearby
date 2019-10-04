const Tipo_Veiculo = require('./tipo_veiculo')

Tipo_Veiculo.methods(['get', 'post', 'put', 'delete'])
Tipo_Veiculo.updateOptions({ new: true, runValidators: true })

module.exports = Tipo_Veiculo