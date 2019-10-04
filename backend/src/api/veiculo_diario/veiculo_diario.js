const restful = require('node-restful')
const mongoose = restful.mongoose

const veiculo_diarioSchema = new mongoose.Schema({
    cliente: { type: String, required: true },
    placa: { type: String, required: true },
    tipo_veiculo: { type: String, required: true }
})

module.exports = restful.model('Veiculo_Diario', veiculo_diarioSchema)