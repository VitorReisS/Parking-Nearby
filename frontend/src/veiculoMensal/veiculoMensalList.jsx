import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './veiculoMensalActions'

class VeiculoMensalList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.cliente}</td>
                <td>{bc.placa}</td>
                <td>{bc.tipo_veiculo}</td>
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
                            <th>Cliente</th>
                            <th>Placa</th>
                            <th>Tipo de Veiculo</th>
                            <th>Data entrada</th>
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

                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.veiculoMensal.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(VeiculoMensalList)