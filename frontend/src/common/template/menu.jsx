import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Maps' icon='map' />
        <MenuTree label='Cadastros' icon='edit'>
            <MenuItem path='#cliente' label='Clientes' icon='users' />
            <MenuItem path='#estacionamento' label='Estacionamentos' icon='home' />
            <MenuItem path='#funcionario' label='Funcionários' icon='user-circle' />
            <MenuItem path='#pagamento' label='Pagamentos' icon='usd' />
            <MenuItem path='#veiculo' label='Veículos' icon='car' />
        </MenuTree>
    </ul>
)