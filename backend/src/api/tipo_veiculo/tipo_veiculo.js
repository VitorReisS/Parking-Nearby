const restful = require('node-restful')
const mongoose = restful.mongoose

const tipo_veiculoSchema = new mongoose.Schema({
    tipo: { type: String, required: [true, 'Informe o tipo de veiculo'] },
    descricao: { type: String },
    observacoes: { type: String }
})

module.exports = restful.model('Tipo_Veiculo', tipo_veiculoSchema)