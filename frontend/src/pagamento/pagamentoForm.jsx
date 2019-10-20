import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class PagamentoForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form'>
                <div className='box-body'>
                    <Field name='placa' component='input' />
                    <Field name='data_entrada' component='input' />
                    <Field name='data_saida' component='input' />
                    <Field name='hora_entrada' component='input' />
                    <Field name='hora_saida' component='input' />
                    <Field name='valor' component='input' />
                    <Field name='funcionario' component='input' />
                    <Field name='tipo_pagamento' component='input' />
                    <Field name='status' component='input' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'pagamentoForm' })(PagamentoForm)