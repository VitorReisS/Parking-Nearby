import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './veiculoDiarioActions'

class VeiculoDiarioList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.estacionamento}</td>
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
                            <th>Estacionamento</th>
                            <th>Placa</th>
                            <th>Tipo de Veículo</th>
                            <th>Data entrada</th>
                            <th>Data Saída</th>
                            <th>Hora Entrada</th>
                            <th>Hora Saída</th>
                            <th>Valor</th>
                            <th>Funcionário</th>
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

const mapStateToProps = state => ({ list: state.veiculoDiario.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(VeiculoDiarioList)