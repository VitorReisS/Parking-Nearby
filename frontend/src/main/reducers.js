import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import TabReducer from '../common/tab/tabReducer'
import ClienteReducer from '../cliente/clienteReducer'
import EstacionamentoReducer from '../estacionamento/estacionamentoReducer'
import FuncionarioReducer from '../funcionario/funcionarioReducer'
import VeiculoDiarioReducer from '../veiculoDiario/veiculoDiarioReducer'
import VeiculoMensalReducer from '../veiculoMensal/veiculoMensalReducer'


const rootReducer = combineReducers({
    tab: TabReducer,
    cliente: ClienteReducer,
    estacionamento: EstacionamentoReducer,
    funcionario: FuncionarioReducer,
    veiculoDiario: VeiculoDiarioReducer,
    veiculoMensal: VeiculoMensalReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer