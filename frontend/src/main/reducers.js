import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import TabReducer from '../common/tab/tabReducer'
import ClienteReducer from '../cliente/clienteReducer'
import EstacionamentoReducer from '../estacionamento/estacionamentoReducer'
import FuncionarioReducer from '../funcionario/funcionarioReducer'
import PagamentoReducer from '../pagamento/pagamentoReducer'
import VeiculoReducer from '../veiculo/veiculoReducer'


const rootReducer = combineReducers({
    tab: TabReducer,
    cliente: ClienteReducer,
    estacionamento: EstacionamentoReducer,
    funcionario: FuncionarioReducer,
    pagamento: PagamentoReducer,
    veiculo: VeiculoReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer