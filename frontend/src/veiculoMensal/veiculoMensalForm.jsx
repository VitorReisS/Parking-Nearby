import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './veiculoMensalActions'
import LabelAndInput from '../common/form/labelAndInput'

class VeiculoMensalForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='estacionamento' component={LabelAndInput} readOnly={readOnly} label='Estacionamento' cols='12 4' placeholder='Informe o nome do estacionamento' />
                    <Field name='cliente' component={LabelAndInput} readOnly={readOnly} label='Cliente' cols='12 4' placeholder='Informe o nome do cliente' />
                    <Field name='placa' component={LabelAndInput} readOnly={readOnly} label='Placa' cols='12 4' placeholder='Informe a placa do carro' />
                    <Field name='tipo_veiculo' component={LabelAndInput} readOnly={readOnly} label='Tipo de Veiculo' cols='12 4' placeholder='Informe o tipo de veiculo' />
                    <Field name='data_entrada' component={LabelAndInput} readOnly={readOnly} label='Data de Entrada' cols='12 4' placeholder='Informe a data de entrada' />
                    <Field name='data_saida' component={LabelAndInput} readOnly={readOnly} label='Data de Saida' cols='12 4' placeholder='Informe a data de saida' />
                    <Field name='hora_entrada' component={LabelAndInput} readOnly={readOnly} label='Hora Entrada' cols='12 4' placeholder='Informe a hora de entrada' />
                    <Field name='hora_saida' component={LabelAndInput} readOnly={readOnly} label='hora de Saida' cols='12 4' placeholder='Informe a hora de saida' />
                    <Field name='valor' component={LabelAndInput} readOnly={readOnly} type='number' label='Valor' cols='12 4' placeholder='Informe valor' />
                    <Field name='funcionario' component={LabelAndInput} readOnly={readOnly} label='Funcionario' cols='12 4' placeholder='Informe o nome do funcionario' />
                    <Field name='tipo_pagamento' component={LabelAndInput} readOnly={readOnly} label='Tipo de Pagamento' cols='12 4' placeholder='Informe o tipo de pagamento' />
                    <Field name='status' component={LabelAndInput} readOnly={readOnly} label='Status' cols='12 4' placeholder='Informe o status' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

VeiculoMensalForm = reduxForm({ form: 'veiculoMensalForm', destroyOnUnmount: false })(VeiculoMensalForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(VeiculoMensalForm)