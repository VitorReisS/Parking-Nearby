import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Funcionario extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Funcionario' small='Cadastro' />
                <Content>
                    Funcionario
                </Content>
            </div>
        )
    }
}

export default Funcionario