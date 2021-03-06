import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './pagamentoActions'

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
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(bc)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
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
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.pagamento.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(PagamentoList)