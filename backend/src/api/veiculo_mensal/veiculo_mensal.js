const restful = require('node-restful')
const mongoose = restful.mongoose

const veiculo_mensalSchema = new mongoose.Schema({
    cliente: { type: String, required: true },
    placa: { type: String, required: true },
    tipo_veiculo: { type: String, required: true },
    data_entrada: { type: Date, required: true },
    data_saida: { type: Date, required: true }
})

module.exports = restful.model('Veiculo_Mensal', veiculo_mensalSchema)