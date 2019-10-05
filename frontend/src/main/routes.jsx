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
        <Route path='/cliente' component={Cliente} />
        <Route path='/estacionamento' component={Estacionamento} />
        <Route path='/funcionario' component={Funcionario} />
        <Route path='/pagamento' component={Pagamento} />
        <Route path='/veiculo' component={Veiculo} />
        <Redirect from='*' to='/' />
    </Router>
)