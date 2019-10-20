import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class EstacionamentoForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form'>
                <div className='box-body'>
                    <Field name='nome' component='input' />
                    <Field name='num_vagas' component='input' />
                    <Field name='horario' component='input' />
                    <Field name='cep' component='input' />
                    <Field name='nome_rua' component='input' />
                    <Field name='num_casa' component='input' />
                    <Field name='bairro' component='input' />
                    <Field name='cidade' component='input' />
                    <Field name='valor_mensal' component='input' />
                    <Field name='valor_diario' component='input' />
                    <Field name='tipo_pagamento' component='input' />
                    <Field name='descricao' component='input' />
                    <Field name='status' component='input' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'estacionamentoForm' })(EstacionamentoForm)