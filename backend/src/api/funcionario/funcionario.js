const restful = require('node-restful')
const mongoose = restful.mongoose

const funcionarioSchema = new mongoose.Schema({
    nome: { type: String, required: [true, 'Informe o nome'] },
    data_nasci: { type: Date, required: [true, 'Informe a data de nascimento'] },
    cpf: { type: Number, required: [true, 'Informe o numero do CPF'] },
    email: { type: String, required: [true, 'Informe o email'] },
    celular: { type: Number, required: [true, 'Informe o numero do celular'] },
    estado_civil: { type: String, required: [true, 'Informe o estado civil'] },
    cep: { type: String, required: [true, 'Informe o numero do CEP'] },
    nome_rua: { type: String, required: [true, 'Informe o nome da rua'] },
    completamento: { type: String },
    num_casa: { type: Number, required: [true, 'Informe o numero da casa'] },
    bairro: { type: String, required: [true, 'Informe o nome bairro'] },
    cidade: { type: String, required: [true, 'Informe o nome cidade'] },
    estado: { type: String, required: [true, 'Informe o nome estado'] },
    sexo: { type: String, required: [true, 'Informe o sexo'] }
})

module.exports = restful.model('Funcionario', funcionarioSchema)