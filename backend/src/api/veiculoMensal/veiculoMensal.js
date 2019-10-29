const restful = require('node-restful')
const mongoose = restful.mongoose

const veiculoMensalSchema = new mongoose.Schema({
    cliente: { type: mongoose.SchemaTypes.ObjectId, ref: 'Cliente' },
    placa: { type: String, required: [true, 'Informe a placa'] },
    tipo_veiculo: { type: mongoose.SchemaTypes.ObjectId, ref: 'Tipo_Veiculo' },
    data_entrada: { type: Date, required: [true, 'Informe a data de entrada'] },
    data_saida: { type: Date },
    valor: { type: Number, required: [true, 'Informe o valor'] },
    fucionario: { type: mongoose.SchemaTypes.ObjectId, ref: 'Funcionario' },
    tipo_pagamento: { type: mongoose.SchemaTypes.ObjectId, ref: 'Tipo_Pagamento' },
    status: { type: String, required: [true, 'Informe o status'] }
})

module.exports = restful.model('VeiculoMensal', veiculoMensalSchema)