const Pagamento = require('./pagamento')
Pagamento.methods(['get', 'post', 'put', 'delete'])
Pagamento.updateOptions({ new: true, runValidators: true })
module.exports = Pagamento