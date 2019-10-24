const restful = require('node-restful')
const mongoose = restful.mongoose

const veiculo_diarioSchema = new mongoose.Schema({
    cliente: { type: mongoose.SchemaTypes.ObjectId, ref: 'Cliente' },
    placa: { type: String, required: [true, 'Informe a placa'] },
    tipo_veiculo: { type: mongoose.SchemaTypes.ObjectId, ref: 'Tipo_Pagamento' }
})

module.exports = restful.model('Veiculo_Diario', veiculo_diarioSchema)