const Veiculo_Diario = require('./veiculo_diario')
Veiculo_Diario.methods(['get', 'post', 'put', 'delete'])
Veiculo_Diario.updateOptions({ new: true, runValidators: true })
module.exports = Veiculo_Diario