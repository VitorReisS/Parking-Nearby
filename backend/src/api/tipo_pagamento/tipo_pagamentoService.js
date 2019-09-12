const Tipo_Pagamento = require('./tipo_pagamento')
Tipo_Pagamento.methods(['get', 'post', 'put', 'delete'])
Tipo_Pagamento.updateOptions({ new: true, runValidators: true })
module.exports = Tipo_Pagamento