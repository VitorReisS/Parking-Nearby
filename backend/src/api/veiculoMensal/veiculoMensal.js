const restful = require('node-restful')
const mongoose = restful.mongoose

const veiculoMensalSchema = new mongoose.Schema({
    estacionamento: { type: String, required: [true, 'Informe o nome do estacionamento'] },
    cliente: { type: String, required: [true, 'Informe o nome do cliente'] },
    placa: { type: String, required: [true, 'Informe a placa'] },
    tipo_veiculo: { type: String, required: [true, 'Informe o tipo de veículo'] },
    data_entrada: { type: String, required: [true, 'Informe a data de entrada'] },
    data_saida: { type: String },
    hora_entrada: { type: String, required: [true, 'Informe a hora entrada'] },
    hora_saida: { type: String },
    valor: { type: Number },
    funcionario: { type: String, required: [true, 'Informe o nome do funcionário'] },
    tipo_pagamento: { type: String },
    status: { type: String, required: [true, 'Informe o status'] }
})

module.exports = restful.model('VeiculoMensal', veiculoMensalSchema)