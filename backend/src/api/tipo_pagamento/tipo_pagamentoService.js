const Tipo_Pagamento = require('./tipo_pagamento')
const errorHandler = require('../common/errorHandler')

Tipo_Pagamento.methods(['get', 'post', 'put', 'delete'])
Tipo_Pagamento.updateOptions({ new: true, runValidators: true })
Tipo_Pagamento.after('post', errorHandler).after('put', errorHandler)

module.exports = Tipo_Pagamento