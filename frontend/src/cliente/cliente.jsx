import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Cliente extends Component {

    render() {
        return (
            <div>
                <ContentHeader title='Clientes' small='Cadastro' />
                <Content>
                    Clientes
                </Content>
            </div>
        )
    }
}

export default Cliente