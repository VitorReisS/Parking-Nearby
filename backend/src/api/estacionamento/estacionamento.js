const restful = require('node-restful')
const mongoose = restful.mongoose
const estacionamentoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    num_vagas: { type: Number, required: true },
    horario: { type: String, required: true },
    cep: { type: Number, required: true },
    nome_rua: { type: String, required: true },
    num_casa: { type: Number, required: true },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    valor_mensal: { type: Number, required: true },
    valor_diario: { type: Number, required: true },
    preco_veiculo: { type: Number, required: true },
    tipo_pagamento: {type: String, required: true },
    descricao: { type: String, required: true },
    status: { type: String, required: true }
})
module.exports = restful.model('Estacionamento', estacionamentoSchema)