const restful = require('node-restful')
const mongoose = restful.mongoose

const clienteSchema = new mongoose.Schema({
    nome: { type: String, required: [true, 'Informe o nome'] },
    data_nasci: { type: String, required: [true, 'Informe a data de nascimento'] },
    celular: { type: Number, required: [true, 'Informe o numero de celular'] },
    cpf: { type: Number, required: [true, 'Informe o numero do CPF'] },
    rg: { type: Number, required: [true, 'Informe o numero do RG'] },
    cep: { type: Number, required: [true, 'Informe o numero do CEP'] },
    nome_rua: { type: String, required: [true, 'Informe o nome da rua'] },
    num_casa: { type: Number, required: [true, 'Informe o numero da casa'] },
    complemento: { type: String },
    bairro: { type: String, required: [true, 'Informe o nome do bairro'] },
    cidade: { type: String, required: [true, 'Informe o nome da cidade'] },
    estado: { type: String, required: [true, 'Informe o nome estado'] },
    email: { type: String, required: [true, 'Informe o email'] },
    sexo: { type: String, required: [true, 'Informe o sexo'] }
})

module.exports = restful.model('Cliente', clienteSchema)