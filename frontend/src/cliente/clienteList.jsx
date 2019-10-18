import React, { Component } from 'react'

class ClienteList extends Component {

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
                        </tr>
                    </thead>
                    <tbody>

                    </tbody>
                </table>
            </div>
        )
    }
}


export default ClienteList