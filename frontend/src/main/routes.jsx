import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Maps from '../maps/maps'
import Cliente from '../cliente/cliente'
import Estacionamento from '../estacionamento/estacionamento'
import Funcionario from '../funcionario/funcionario'
import Pagamento from '../pagamento/pagamento'
import Veiculo from '../veiculo/veiculo'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Maps} />
        <Route path='/clientes' component={Cliente} />
        <Route path='/estacionamentos' component={Estacionamento} />
        <Route path='/funcionarios' component={Funcionario} />
        <Route path='/pagamentos' component={Pagamento} />
        <Route path='/veiculos' component={Veiculo} />
        <Redirect from='*' to='/' />
    </Router>
)