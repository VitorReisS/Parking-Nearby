import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Cliente from '../cliente/cliente'
import Funcionario from '../funcionario/funcionario'
import Estacionamento from '../estacionamento/estacionamento'
import Veiculo from '../veiculo/veiculo'
import Pagamento from '../pagamento/pagamento'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/cliente' component={Cliente} />
        <Route path='/funcionario' component={Funcionario} />
        <Route path='/estacionamento' component={Estacionamento} />
        <Route path='/veiculo' component={Veiculo} />
        <Route path='/pagamento' component={Pagamento} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/clientes' />
    </Router>
)