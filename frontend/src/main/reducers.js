import { combineReducers } from 'redux'

import TabReducer from '../common/tab/tabReducer'
import ClienteReducer from '../cliente/clienteReducer'

const rootReducer = combineReducers({
    tab: TabReducer,
    cliente: ClienteReducer
})

export default rootReducer