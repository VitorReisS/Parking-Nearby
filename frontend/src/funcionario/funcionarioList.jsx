import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './funcionarioActions'

class FuncionarioList extends Component {

    componentWillMount() {
        this.props.getList()
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