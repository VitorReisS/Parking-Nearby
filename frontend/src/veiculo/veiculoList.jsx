import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './veiculoActions'

class VeiculoList extends Component {

    componentWillMount() {
        this.props.getList()
    }

    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>CLiente</th>
                            <th>Placa</th>
                            <th>Tipo de Veiculo</th>
                            <th>Data entrada</th>
                            <th>Data Saida</th>
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({ list: state.veiculo.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(VeiculoList)