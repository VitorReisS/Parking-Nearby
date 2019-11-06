import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field } from 'redux-form'

import { init } from './clienteActions'
import LabelAndInput from '../common/form/labelAndInput'
import FormSexo from '../common/form/formSexo'

class ClienteForm extends Component {

    render() {
        const { handleSubmit, readOnly } = this.props
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='nome' component={LabelAndInput} readOnly={readOnly} label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='data_nasci' component={LabelAndInput} readOnly={readOnly} label='Data de Nascimento' cols='12 4' placeholder='Informe a data de nascimento' />
                    <Field name='celular' component={LabelAndInput} readOnly={readOnly} type='number' label='Celular' cols='12 4' placeholder='Informe o número do celular' />
                    <Field name='cpf' component={LabelAndInput} readOnly={readOnly} type='number' label='CPF' cols='12 4' placeholder='Informe o número do CPF' />
                    <Field name='rg' component={LabelAndInput} readOnly={readOnly} type='number' label='RG' cols='12 4' placeholder='Informe o número do RG' />
                    <Field name='cep' component={LabelAndInput} readOnly={readOnly} type='number' label='CEP' cols='12 4' placeholder='Informe o número do CEP' />
                    <Field name='nome_rua' component={LabelAndInput} readOnly={readOnly} label='Nome da Rua' cols='12 4' placeholder='Informe o nome da rua' />
                    <Field name='num_casa' component={LabelAndInput} readOnly={readOnly} type='number' label='Número da Casa' cols='12 4' placeholder='Informe o número da casa' />
                    <Field name='complemento' component={LabelAndInput} readOnly={readOnly} label='Complemento' cols='12 4' placeholder='Informe o complemento' />
                    <Field name='bairro' component={LabelAndInput} readOnly={readOnly} label='Bairro' cols='12 4' placeholder='Informe o nome do bairro' />
                    <Field name='cidade' component={LabelAndInput} readOnly={readOnly} label='Cidade' cols='12 4' placeholder='Informe o nome da cidade' />
                    <Field name='estado' component={LabelAndInput} readOnly={readOnly} label='Estado' cols='12 4' placeholder='Informe o nome do estado' />
                    <Field name='email' component={LabelAndInput} readOnly={readOnly} label='Email' cols='12 4' placeholder='Informe o email' />
                    <Field name='sexo' component={FormSexo} readOnly={readOnly} label='Sexo' cols='12 4' placeholder='Informe o sexo' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}>{this.props.submitLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

ClienteForm = reduxForm({ form: 'clienteForm', destroyOnUnmount: false })(ClienteForm)
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(null, mapDispatchToProps)(ClienteForm)