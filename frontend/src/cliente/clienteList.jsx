import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate, showDelete } from './clienteActions'

class ClienteList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.nome}</td>
                <td>{bc.data_nasci}</td>
                <td>{bc.celular}</td>
                <td>{bc.cpf}</td>
                <td>{bc.rg}</td>
                <td>{bc.cep}</td>
                <td>{bc.nome_rua}</td>
                <td>{bc.num_casa}</td>
                <td>{bc.complemento}</td>
                <td>{bc.bairro}</td>
                <td>{bc.cidade}</td>
                <td>{bc.estado}</td>
                <td>{bc.email}</td>
                <td>{bc.senha}</td>
                <td>{bc.sexo}</td>
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
                            <th>Data de Nascimento</th>
                            <th>Celular</th>
                            <th>CPF</th>
                            <th>RG</th>
                            <th>CEP</th>
                            <th>Nome da Rua</th>
                            <th>Nuemro da Casa</th>
                            <th>Complemento</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Email</th>
                            <th>Senha</th>
                            <th>Sexo</th>
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

const mapStateToProps = state => ({ list: state.cliente.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate, showDelete }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(ClienteList)