const restful = require('node-restful')
const mongoose = restful.mongoose

const veiculo_mensalSchema = new mongoose.Schema({
    cliente: { type: mongoose.SchemaTypes.ObjectId, ref: 'Cliente' },
    placa: { type: String, required: [true, 'Informe a placa'] },
    tipo_veiculo: { type: mongoose.SchemaTypes.ObjectId, ref: 'Tipo_Veiculo' },
    data_entrada: { type: Date, required: [true, 'Informe a data de entrada'] },
    data_saida: { type: Date }
})

module.exports = restful.model('Veiculo_Mensal', veiculo_mensalSchema)