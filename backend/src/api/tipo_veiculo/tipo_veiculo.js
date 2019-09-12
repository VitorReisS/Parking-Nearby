const restful = require('node-restful')
const mongoose = restful.mongoose
const tipo_veiculoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    observacoes: { type: String, required: true }
})
module.exports = restful.model('Tipo_Veiculo', tipo_veiculoSchema)