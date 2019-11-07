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
                    <Field name='nome' component={LabelAndInput} readOnly={readOnly} label='Nome do Estacionamento' cols='12 4' placeholder='Informe o nome do estacionamento' />
                    <Field name='num_vagas' component={LabelAndInput} readOnly={readOnly} type='number' label='Número de Vagas' cols='12 4' placeholder='Informe o número de vagas disponíveis' />
                    <Field name='horario' component={LabelAndInput} readOnly={readOnly} label='Horário' cols='12 4' placeholder='Informe o horário' />
                    <Field name='cep' component={LabelAndInput} readOnly={readOnly} type='number' label='CEP' cols='12 4' placeholder='Informe o número do cep' />
                    <Field name='nome_rua' component={LabelAndInput} readOnly={readOnly} label='Nome da Rua' cols='12 4' placeholder='Informe o nome da rua' />
                    <Field name='num_casa' component={LabelAndInput} readOnly={readOnly} type='number' label='Número da Casa' cols='12 4' placeholder='Informe o número da casa' />
                    <Field name='bairro' component={LabelAndInput} readOnly={readOnly} label='Bairro' cols='12 4' placeholder='Informe o nome do bairro' />
                    <Field name='cidade' component={LabelAndInput} readOnly={readOnly} label='Cidade' cols='12 4' placeholder='Informe o nome da cidade' />
                    <Field name='valor_mensal' component={LabelAndInput} readOnly={readOnly} type='number' label='Valor Mensal' cols='12 4' placeholder='Informe o valor mensal' />
                    <Field name='preco_camionete' component={LabelAndInput} readOnly={readOnly} type='number' label='Preço da Camionete' cols='12 4' placeholder='Informe o preço da camionete' />
                    <Field name='preco_carro' component={LabelAndInput} readOnly={readOnly} type='number' label='Preço do Carro' cols='12 4' placeholder='Informe o preço do carro' />
                    <Field name='preco_moto' component={LabelAndInput} readOnly={readOnly} type='number' label='Preço da Moto' cols='12 4' placeholder='Informe o preço da Moto' />
                    <Field name='descricao' component={LabelAndInput} readOnly={readOnly} label='Descrição' cols='12 4' placeholder='Informe uma descrição' />
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

EstacionamentoForm = reduxForm({ form: 'estacionamentoForm', destroyOnUnmount: false })(EstacionamentoForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(EstacionamentoForm)