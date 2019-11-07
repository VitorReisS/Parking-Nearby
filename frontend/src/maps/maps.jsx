import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Foto from '../img/foto.png'

class Maps extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Maps' small='Versão 1.0' />
                <Content>
                    <img src={Foto} width="1100" height="500" />
                </Content>
            </div>
        )
    }
}

export default Maps