const Pagamento = require('./pagamento')
const errorHandler = require('../common/errorHandler')

Pagamento.methods(['get', 'post', 'put', 'delete'])
Pagamento.updateOptions({ new: true, runValidators: true })
Pagamento.after('post', errorHandler).after('put', errorHandler)

module.exports = Pagamento