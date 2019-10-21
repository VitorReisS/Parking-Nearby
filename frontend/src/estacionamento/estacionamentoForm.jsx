import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './estacionamentoActions'
import LabelAndInput from '../common/form/labelAndInput'

class EstacionamentoForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component={LabelAndInput} readOnly={readOnly} label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='num_vagas' component={LabelAndInput} readOnly={readOnly} type='number' label='Numero de Vagas' cols='12 4' placeholder='Informe o numero de vagas diponiveis' />
                    <Field name='horario' component={LabelAndInput} readOnly={readOnly} label='Horario' cols='12 4' placeholder='Informe o horario' />
                    <Field name='cep' component={LabelAndInput} readOnly={readOnly} type='number' label='CEP' cols='12 4' placeholder='Informe o cep' />
                    <Field name='nome_rua' component={LabelAndInput} readOnly={readOnly} label='Nome da Rua' cols='12 4' placeholder='Informe o nome da rua' />
                    <Field name='num_casa' component={LabelAndInput} readOnly={readOnly} type='number' label='Numero da Casa' cols='12 4' placeholder='Informe o numero da casa' />
                    <Field name='bairro' component={LabelAndInput} readOnly={readOnly} label='Bairro' cols='12 4' placeholder='Informe o nome do bairro' />
                    <Field name='cidade' component={LabelAndInput} readOnly={readOnly} label='Cidade' cols='12 4' placeholder='Informe o nome da cidade' />
                    <Field name='valor_mensal' component={LabelAndInput} readOnly={readOnly} type='number' label='Valor Mensal' cols='12 4' placeholder='Informe o valor mensal' />
                    <Field name='valor_diario' component={LabelAndInput} readOnly={readOnly} type='number' label='Valor Diario' cols='12 4' placeholder='Informe o valor diario' />
                    <Field name='tipo_pagamento' component={LabelAndInput} readOnly={readOnly} label='Tipo de Pagamento' cols='12 4' placeholder='Informe o tipo de pagamento' />
                    <Field name='descricao' component={LabelAndInput} readOnly={readOnly} label='Descição' cols='12 4' placeholder='Informe uma descrição' />
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

EstacionamentoForm = reduxForm({ form: 'estacionamentoForm', destroyOnUnmount: false })(EstacionamentoForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(EstacionamentoForm)