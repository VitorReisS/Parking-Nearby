import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'

class VeiculoForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form'>
                <div className='box-body'>
                    <Field name='cliente' component={LabelAndInput} label='Cliente' cols='12 4' placeholder='Informe o nome do cliente' />
                    <Field name='placa' component={LabelAndInput} label='Placa' cols='12 4' placeholder='Informe a placa do carro' />
                    <Field name='tipo_veiculo' component={LabelAndInput} label='Tipo de Veiculo' cols='12 4' placeholder='Informe o tipo de veiculo' />
                    <Field name='data_entrada' component={LabelAndInput} label='Data de Entrada' cols='12 4' placeholder='Informe a data de entrada' />
                    <Field name='data_saida' component={LabelAndInput} label='Data de Saida' cols='12 4' placeholder='Informe a data de saida' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'veiculoForm', destroyOnUnmount: false })(VeiculoForm)