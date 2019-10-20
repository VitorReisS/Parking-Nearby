import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class VeiculoForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form'>
                <div className='box-body'>
                    <Field name='cliente' component='input' />
                    <Field name='placa' component='input' />
                    <Field name='tipo_veiculo' component='input' />
                    <Field name='data_entrada' component='input' />
                    <Field name='data_saida' component='input' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'veiculoForm' })(VeiculoForm)