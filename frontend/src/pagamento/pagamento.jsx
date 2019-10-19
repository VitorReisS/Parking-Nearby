import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

class Pagamento extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Pagamento' small='Cadastro' />
                <Content>
                    Pagamento
                </Content>
            </div>
        )
    }
}

export default Pagamento