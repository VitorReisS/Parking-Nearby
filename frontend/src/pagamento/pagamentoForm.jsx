import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './pagamentoActions'
import LabelAndInput from '../common/form/labelAndInput'

class PagamentoForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='placa' component={LabelAndInput} readOnly={readOnly} label='Placa' cols='12 4' placeholder='Informe a placa do carro' />
                    <Field name='data_entrada' component={LabelAndInput} readOnly={readOnly} label='Data de Entrada' cols='12 4' placeholder='Informe a data de entrada' />
                    <Field name='data_saida' component={LabelAndInput} readOnly={readOnly} label='Data de Saida' cols='12 4' placeholder='Informe a data de Saida' />
                    <Field name='hora_entrada' component={LabelAndInput} readOnly={readOnly} label='Hora Entrada' cols='12 4' placeholder='Informe a hora de entrada' />
                    <Field name='hora_saida' component={LabelAndInput} readOnly={readOnly} label='Hora Saida' cols='12 4' placeholder='Informe a hora de saida' />
                    <Field name='valor' component={LabelAndInput} readOnly={readOnly} type='number' label='Valor' cols='12 4' placeholder='Informe o valor' />
                    <Field name='funcionario' component={LabelAndInput} readOnly={readOnly} label='Funcionario' cols='12 4' placeholder='Informe o nome do funcionario' />
                    <Field name='tipo_pagamento' component={LabelAndInput} readOnly={readOnly} label='Tipo de Pagamento' cols='12 4' placeholder='Informe o tipo de pagamento' />
                    <Field name='status' component={LabelAndInput} readOnly={readOnly} label='Status' cols='12 4' placeholder='Informe o status' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

PagamentoForm = reduxForm({ form: 'pagamentoForm', destroyOnUnmount: false })(PagamentoForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(PagamentoForm)