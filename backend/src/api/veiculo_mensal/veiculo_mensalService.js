const Veiculo_Mensal = require('./veiculo_mensal')

Veiculo_Mensal.methods(['get', 'post', 'put', 'delete'])
Veiculo_Mensal.updateOptions({ new: true, runValidators: true })

module.exports = Veiculo_Mensal