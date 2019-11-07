const restful = require('node-restful')
const mongoose = restful.mongoose

const estacionamentoSchema = new mongoose.Schema({
    nome: { type: String, required: [true, 'Informe o nome'] },
    num_vagas: { type: Number, required: [true, 'Informe o numero de vagas'] },
    horario: { type: String, required: [true, 'Informe o horario'] },
    cep: { type: Number, required: [true, 'Informe o numero de CEP'] },
    nome_rua: { type: String, required: [true, 'Informe o nome da rua'] },
    num_casa: { type: Number, required: [true, 'Informe o numero da casa'] },
    bairro: { type: String, required: [true, 'Informe o nome do bairro'] },
    cidade: { type: String, required: [true, 'Informe o nome da cidade'] },
    valor_mensal: { type: Number, required: [true, 'Informe o valor mensal'] },
    preco_camionete: { type: Number, required: [true, 'Informe o preço do camionete'] },
    preco_carro: { type: Number, required: [true, 'Informe o preço do carro'] },
    preco_moto: { type: Number, required: [true, 'Informe o preço do moto'] },
    descricao: { type: String },
    status: { type: String }
})

module.exports = restful.model('Estacionamento', estacionamentoSchema)