const restful = require('node-restful')
const mongoose = restful.mongoose

const veiculoMensalSchema = new mongoose.Schema({
    estacionamento: { type: mongoose.SchemaTypes.ObjectId, ref: 'Estacionamento' },
    cliente: { type: mongoose.SchemaTypes.ObjectId, ref: 'Cliente' },
    placa: { type: String, required: [true, 'Informe a placa'] },
    tipo_veiculo: { type: String, required: [true, 'Informe o tipo de veículo'] },
    data_entrada: { type: String, required: [true, 'Informe a data de entrada'] },
    data_saida: { type: String },
    hora_entrada: { type: String, required: [true, 'Informe a hora entrada'] },
    hora_saida: { type: String },
    valor: { type: Number, required: [true, 'Informe o valor'] },
    fucionario: { type: mongoose.SchemaTypes.ObjectId, ref: 'Funcionario' },
    tipo_pagamento: { type: String, required: [true, 'Informe o tipo de pagamento'] },
    status: { type: String, required: [true, 'Informe o status'] }
})

module.exports = restful.model('VeiculoMensal', veiculoMensalSchema)