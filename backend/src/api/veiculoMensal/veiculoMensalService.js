const VeiculoMensal = require('./veiculoMensal')
const errorHandler = require('../common/errorHandler')

VeiculoMensal.methods(['get', 'post', 'put', 'delete'])
VeiculoMensal.updateOptions({ new: true, runValidators: true })
VeiculoMensal.after('post', errorHandler).after('put', errorHandler)

module.exports = VeiculoMensal