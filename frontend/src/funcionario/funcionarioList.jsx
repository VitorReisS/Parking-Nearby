import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './funcionarioActions'

class FuncionarioList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.nome}</td>
                <td>{bc.data_nasci}</td>
                <td>{bc.cpf}</td>
                <td>{bc.email}</td>
                <td>{bc.senha}</td>
                <td>{bc.celular}</td>
                <td>{bc.estado}</td>
                <td>{bc.cep}</td>
                <td>{bc.nome_rua}</td>
                <td>{bc.complemento}</td>
                <td>{bc.num_rua}</td>
                <td>{bc.bairro}</td>
                <td>{bc.cidade}</td>
                <td>{bc.estado}</td>
                <td>{bc.sexo}</td>
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
                            <th>CPF</th>
                            <th>Email</th>
                            <th>Senha</th>
                            <th>Celular</th>
                            <th>Estado Civil</th>
                            <th>CEP</th>
                            <th>Nome da Rua</th>
                            <th>Complemento</th>
                            <th>Numero da Casa</th>
                            <th>Bairro</th>
                            <th>Cidade</th>
                            <th>Estado</th>
                            <th>Sexo</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.funcionario.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(FuncionarioList)