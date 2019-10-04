const express = require('express')

module.exports = function (server) {

    // Definir URL base para todas as rotas
    const router = express.Router()
    server.use('/api', router)
    
    // Routes
    const cliente = require('../api/cliente/clienteService')
    cliente.register(router, '/cliente')
}