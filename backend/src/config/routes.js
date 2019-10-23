const express = require('express')

module.exports = function (server) {

    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)
    
    // Routes
    const Cliente = require('../api/cliente/clienteService')
    Cliente.register(router, '/clientes')

    const Estacionamento = require('../api/estacionamento/estacionamentoService')
    Estacionamento.register(router, '/estacionamentos')

    const Funcionario = require('../api/funcionario/funcionarioService')
    Funcionario.register(router, '/funcionarios')

    const Pagamento = require('../api/pagamento/pagamentoService')
    Pagamento.register(router, '/pagamentos')
}