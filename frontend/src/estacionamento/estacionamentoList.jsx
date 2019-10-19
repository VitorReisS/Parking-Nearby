import React, { Component } from 'react'

class EstacionamentoList extends Component {

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
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default EstacionamentoList