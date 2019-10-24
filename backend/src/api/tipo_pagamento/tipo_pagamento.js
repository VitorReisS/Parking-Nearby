const restful = require('node-restful')
const mongoose = restful.mongoose

const tipo_pagamentoSchema = new mongoose.Schema({
    forma: { type: String, required: [true, 'Informe a forma de pagamento'] },
    descricao: { type: String, required: [true, 'Informe a descrição'] },
})

module.exports = restful.model('Tipo_Pagamento', tipo_pagamentoSchema)