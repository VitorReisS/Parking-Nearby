const restful = require('node-restful')
const mongoose = restful.mongoose

const funcionarioSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    data_nasci: { type: Date, required: true },
    cpf: { type: Number, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    celular: { type: Number, required: true },
    estado_civil: { type: String, required: true },
    cep: { type: String, required: true },
    nome_rua: { type: String, required: true },
    completamento: { type: String, required: true },
    num_rua: { type: Number, required: true },
    bairro: { type: String, required: true },
    cidade: { type: String, required: true },
    estado: { type: String, required: true },
    sexo: { type: String, required: true }
})

module.exports = restful.model('Funcionario', funcionarioSchema)