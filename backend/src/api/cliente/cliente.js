const restful = require('node-restful')
const mongoose = restful.mongoose
const clienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    data_nasci: { type: Date, required: true },
    celular: { type: Number, required: true },
    cpf: { type: Number, required: true },
    rg: { type: Number, required: true },
    cep: { type: Number, required: true },
    nome_rua: { type: String, required: true },
    num_casa: { type: Number, required: true },
    complemento: { type: String, required: true },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    sexo: { type: String, required: true }
})
module.exports = restful.model('Cliente', clienteSchema)