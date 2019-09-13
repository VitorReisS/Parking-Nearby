import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Cliente from '../cliente/cliente'
import Funcionario from '../funcionario/funcionario'
import About from '../about/about'
import Menu from '../template/menu'
import Estacionamento from '../estacionamento/estacionamento'
import Veiculo from '../veiculo/veiculo'
import Pagamento from '../pagamento/pagamento'

export default props => (
    <div className='container'>
        <Menu />
        <Cliente />
        <Funcionario />
        <Estacionamento />
        <Veiculo />
        <Pagamento />
        <About />
    </div>
)