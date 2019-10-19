import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './pagamentoActions'

class PagamentoList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.placa}</td>
                <td>{bc.data_entrada}</td>
                <td>{bc.data_saida}</td>
                <td>{bc.hora_entrada}</td>
                <td>{bc.hora_saida}</td>
                <td>{bc.valor}</td>
                <td>{bc.funcionario}</td>
                <td>{bc.tipo_pagamento}</td>
                <td>{bc.status}</td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Placa</th>
                            <th>Data Entrada</th>
                            <th>Data Saida</th>
                            <th>Hora Entrada</th>
                            <th>Hora Saida</th>
                            <th>Valor</th>
                            <th>Funcionario</th>
                            <th>Tipo de Pagamento</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.pagamento.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PagamentoList)