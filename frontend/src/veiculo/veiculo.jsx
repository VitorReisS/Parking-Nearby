import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Veiculo extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Veiculo' small='Cadastro' />
                <Content>
                    Veiculo
                </Content>
            </div>
        )
    }
}

export default Veiculo