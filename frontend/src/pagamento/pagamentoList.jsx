import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './pagamentoActions'

class PagamentoList extends Component {

    componentWillMount() {
        this.props.getList()
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