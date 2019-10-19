import React, { Component } from 'react'

class VeiculoList extends Component {

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

export default VeiculoList