import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './veiculoActions'
import LabelAndInput from '../common/form/labelAndInput'

class VeiculoForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='cliente' component={LabelAndInput} readOnly={readOnly} label='Cliente' cols='12 4' placeholder='Informe o nome do cliente' />
                    <Field name='placa' component={LabelAndInput} readOnly={readOnly} label='Placa' cols='12 4' placeholder='Informe a placa do carro' />
                    <Field name='tipo_veiculo' component={LabelAndInput} readOnly={readOnly} label='Tipo de Veiculo' cols='12 4' placeholder='Informe o tipo de veiculo' />
                    <Field name='data_entrada' component={LabelAndInput} readOnly={readOnly} label='Data de Entrada' cols='12 4' placeholder='Informe a data de entrada' />
                    <Field name='data_saida' component={LabelAndInput} readOnly={readOnly} label='Data de Saida' cols='12 4' placeholder='Informe a data de saida' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

VeiculoForm = reduxForm({ form: 'veiculoForm', destroyOnUnmount: false })(VeiculoForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(VeiculoForm)