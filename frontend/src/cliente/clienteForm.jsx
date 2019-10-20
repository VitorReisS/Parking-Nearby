import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class ClienteForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form'>
                <div className='box-body'>
                    <Field name='nome' component='input' />
                    <Field name='data_nasci' component='input' />
                    <Field name='celular' component='input' />
                    <Field name='cpf' component='input' />
                    <Field name='rg' component='input' />
                    <Field name='cep' component='input' />
                    <Field name='nome_rua' component='input' />
                    <Field name='num_casa' component='input' />
                    <Field name='complemento' component='input' />
                    <Field name='bairro' component='input' />
                    <Field name='cidade' component='input' />
                    <Field name='estado' component='input' />
                    <Field name='email' component='input' />
                    <Field name='senha' component='input' />
                    <Field name='sexo' component='input' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({form: 'clienteForm'})(ClienteForm)