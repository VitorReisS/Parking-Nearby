import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {}

export function getList() {
    const request = axios.get(`${BASE_URL}/veiculoDiarios`)
    return {
        type: 'VEICULO_DIARIOS_FETCHED',
        payload: request
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${BASE_URL}/veiculoDiarios/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação Realizada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(veiculoDiario) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('veiculoDiarioForm', veiculoDiario)
    ]
}

export function showDelete(veiculoDiario) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('veiculoDiarioForm', veiculoDiario)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('veiculoDiarioForm', INITIAL_VALUES)
    ]
}