const VeiculoDiario = require('./veiculoDiario')
const errorHandler = require('../common/errorHandler')

VeiculoDiario.methods(['get', 'post', 'put', 'delete'])
VeiculoDiario.updateOptions({ new: true, runValidators: true })
VeiculoDiario.after('post', errorHandler).after('put', errorHandler)

module.exports = VeiculoDiario