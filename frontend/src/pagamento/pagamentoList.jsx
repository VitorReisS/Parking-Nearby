import React, { Component } from 'react'

class PagamentoList extends Component {

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

export default PagamentoList