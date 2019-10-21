import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './estacionamentoActions'

class EstacionamentoList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.nome}</td>
                <td>{bc.num_vagas}</td>
                <td>{bc.horario}</td>
                <td>{bc.cep}</td>
                <td>{bc.nome_rua}</td>
                <td>{bc.num_casa}</td>
                <td>{bc.bairro}</td>
                <td>{bc.cidade}</td>
                <td>{bc.valor_mensal}</td>
                <td>{bc.valor_diario}</td>
                <td>{bc.tipo_pagamento}</td>
                <td>{bc.descricao}</td>
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
                            <th>Nome</th>
                            <th>Numeto de Vagas</th>
                            <th>Horario</th>
                            <th>CEP</th>
                            <th>Nome da Rua</th>
                            <th>Numeto da Casa</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>Valor Mensal</th>
                            <th>Valor Diario</th>
                            <th>Preço Veiculo</th>
                            <th>Tipo de Pagamento</th>
                            <th>Descrição</th>
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

const mapStateToProps = state => ({ list: state.estacionamento.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(EstacionamentoList)