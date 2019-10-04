const restful = require('node-restful')
const mongoose = restful.mongoose

const pagamentoSchema = new mongoose.Schema({
    placa: { type: String, required: true },
    data_entrada: { type: Date, required: true },
    data_saida: { type: Date, required: true },
    hora_entrada: { type: Number, required: true },
    hora_saida: {type: Number, required: true },
    valor: {type: Number, required: true },
    fucionario: { type: String, required: true },
    tipo_pagamento: { type: String, required: true },
    status: { type: String, required: true }
})

module.exports = restful.model('Pagamento', pagamentoSchema)