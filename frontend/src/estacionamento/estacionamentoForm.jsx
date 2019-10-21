import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'

class EstacionamentoForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form'>
                <div className='box-body'>
                    <Field name='nome' component={LabelAndInput} label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='num_vagas' component={LabelAndInput} type='number' label='Numero de Vagas' cols='12 4' placeholder='Informe o numero de vagas diponiveis' />
                    <Field name='horario' component={LabelAndInput} label='Horario' cols='12 4' placeholder='Informe o horario' />
                    <Field name='cep' component={LabelAndInput} type='number' label='CEP' cols='12 4' placeholder='Informe o cep' />
                    <Field name='nome_rua' component={LabelAndInput} label='Nome da Rua' cols='12 4' placeholder='Informe o nome da rua' />
                    <Field name='num_casa' component={LabelAndInput} type='number' label='Numero da Casa' cols='12 4' placeholder='Informe o numero da casa' />
                    <Field name='bairro' component={LabelAndInput} label='Bairro' cols='12 4' placeholder='Informe o nome do bairro' />
                    <Field name='cidade' component={LabelAndInput} label='Cidade' cols='12 4' placeholder='Informe o nome da cidade' />
                    <Field name='valor_mensal' component={LabelAndInput} type='number' label='Valor Mensal' cols='12 4' placeholder='Informe o valor mensal' />
                    <Field name='valor_diario' component={LabelAndInput} type='number' label='Valor Diario' cols='12 4' placeholder='Informe o valor diario' />
                    <Field name='tipo_pagamento' component={LabelAndInput} label='Tipo de Pagamento' cols='12 4' placeholder='Informe o tipo de pagamento' />
                    <Field name='descricao' component={LabelAndInput} label='Descição' cols='12 4' placeholder='Informe uma descrição' />
                    <Field name='status' component={LabelAndInput} label='Status' cols='12 4' placeholder='Informe o status' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'estacionamentoForm', destroyOnUnmount: false })(EstacionamentoForm)