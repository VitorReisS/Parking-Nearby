import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Maps' icon='map' />
        <MenuItem path='#pesquisar' label='Pesquisar' icon='search' />
        <MenuTree label='Cadastros' icon='edit'>
            <MenuItem path='#clientes' label='Clientes' icon='users' />
            <MenuItem path='#estacionamentos' label='Estacionamentos' icon='home' />
            <MenuItem path='#funcionarios' label='Funcionários' icon='user-circle' />
            <MenuItem path='#pagamentos' label='Pagamentos' icon='usd' />
            <MenuItem path='#veiculos' label='Veículos' icon='car' />
        </MenuTree>
    </ul>
)