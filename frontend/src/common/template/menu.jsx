import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='#/' label='Maps' icon='map' />
        <MenuTree label='Cadastros' icon='edit'>
            <MenuItem path='#clientes' label='Clientes' icon='users' />
            <MenuItem path='#estacionamentos' label='Estacionamentos' icon='home' />
            <MenuItem path='#funcionarios' label='Funcionários' icon='user-circle' />
            <MenuItem path='#veiculoDiarios' label='Veículos Diarios' icon='car' />
            <MenuItem path='#veiculoMensals' label='Veículos Mensal' icon='car' />
        </MenuTree>
    </ul>
)