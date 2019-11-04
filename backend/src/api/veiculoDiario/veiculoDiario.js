const restful = require('node-restful')
const mongoose = restful.mongoose

const veiculoDiarioSchema = new mongoose.Schema({
    estacionamento: { type: mongoose.SchemaTypes.ObjectId, ref: 'Estacionamento' },
    placa: { type: String, required: [true, 'Informe a placa'] },
    tipo_veiculo: { type: mongoose.SchemaTypes.ObjectId, ref: 'Tipo_Veiculo' },
    data_entrada: { type: Date, required: [true, 'Informe a data de entrada'] },
    data_saida: { type: Date },
    hora_entrada: { type: Number, required: [true, 'Informe a hora entrada'] },
    hora_saida: { type: Number },
    valor: { type: Number, required: [true, 'Informe o valor'] },
    fucionario: { type: mongoose.SchemaTypes.ObjectId, ref: 'Funcionario' },
    tipo_pagamento: { type: mongoose.SchemaTypes.ObjectId, ref: 'Tipo_Pagamento' },
    status: { type: String, required: [true, 'Informe o status'] }
})

module.exports = restful.model('VeiculoDiario', veiculoDiarioSchema)