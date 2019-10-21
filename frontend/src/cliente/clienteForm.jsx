import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import LabelAndInput from '../common/form/labelAndInput'

class ClienteForm extends Component {

    render() {
        const { handleSubmit } = this.props
        return (
            <form role='form'>
                <div className='box-body'>
                    <Field name='nome' component={LabelAndInput} label='Nome' cols='12 4' placeholder='Informe o nome' />
                    <Field name='data_nasci' component={LabelAndInput} label='Data de Nascimento' cols='12 4' placeholder='Informe a data de nascimento' />
                    <Field name='celular' component={LabelAndInput} type='number' label='Celular' cols='12 4' placeholder='Informe o numero do celular' />
                    <Field name='cpf' component={LabelAndInput} type='number' label='CPF' cols='12 4' placeholder='Informe o numero do CPF' />
                    <Field name='rg' component={LabelAndInput} type='number' label='RG' cols='12 4' placeholder='Informe o numero do RG' />
                    <Field name='cep' component={LabelAndInput} type='number' label='CEP' cols='12 4' placeholder='Informe o numero do CEP' />
                    <Field name='nome_rua' component={LabelAndInput} label='Nome da Rua' cols='12 4' placeholder='Informe o nome da rua' />
                    <Field name='num_casa' component={LabelAndInput} type='number' label='Numero da Casa' cols='12 4' placeholder='Informe o numero da casa' />
                    <Field name='complemento' component={LabelAndInput} label='Complemento' cols='12 4' placeholder='Informe o complemento' />
                    <Field name='bairro' component={LabelAndInput} label='Bairro' cols='12 4' placeholder='Informe o nome do bairro' />
                    <Field name='cidade' component={LabelAndInput} label='Cidade' cols='12 4' placeholder='Informe o nome da cidade' />
                    <Field name='estado' component={LabelAndInput} label='Estado' cols='12 4' placeholder='Informe o nome do estado' />
                    <Field name='email' component={LabelAndInput} label='Email' cols='12 4' placeholder='Informe o email' />
                    <Field name='senha' component={LabelAndInput} label='Senha' cols='12 4' placeholder='Informe a senha' />
                    <Field name='sexo' component={LabelAndInput} label='Sexo' cols='12 4' placeholder='Informe o sexo' />
                </div>
                <div className='box-footer'>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </div>
            </form>
        )
    }
}

export default reduxForm({ form: 'clienteForm', destroyOnUnmount: false })(ClienteForm)