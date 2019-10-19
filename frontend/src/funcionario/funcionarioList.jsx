import React, { Component } from 'react'

class FuncionarioList extends Component {

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

export default FuncionarioList