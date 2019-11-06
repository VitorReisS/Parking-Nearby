import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={props.cols}>
        <div className='form-group'>
            <label htmlFor={props.name}>{props.label}</label>
            <select {...props.input} className='form-control'
                placeholder={props.placeholder}
                readOnly={props.readOnly} type={props.type}>
                <option></option>
                <option value="Camionete">Camionete</option>
                <option value="Carro">Carro</option>
                <option value="Moto">Moto</option>
            </select>
        </div>
    </Grid>
)