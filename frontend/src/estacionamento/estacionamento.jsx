import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'
import TabsHeader from '../common/tab/tabsHeader'
import TabsContent from '../common/tab/tabsContent'

class Estacionamento extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Estacionamento' small='Cadastro' />
                <Content>
                    <Tabs>
                        <TabsHeader>

                        </TabsHeader>
                        <TabsContent>
                            
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default Estacionamento