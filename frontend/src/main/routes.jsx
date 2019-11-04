import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Maps from '../maps/maps'
import Cliente from '../cliente/cliente'
import Estacionamento from '../estacionamento/estacionamento'
import Funcionario from '../funcionario/funcionario'
import VeiculoDiario from '../veiculoDiario/veiculoDiario'
import VeiculoMensal from '../veiculoMensal/veiculoMensal'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={Maps} />
        <Route path='/clientes' component={Cliente} />
        <Route path='/estacionamentos' component={Estacionamento} />
        <Route path='/funcionarios' component={Funcionario} />
        <Route path='/veiculoDiarios' component={VeiculoDiario} />
        <Route path='/veiculoMensals' component={VeiculoMensal} />
        <Redirect from='*' to='/' />
    </Router>
)