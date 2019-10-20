import axios from 'axios'
import { toastr } from 'react-redux-toastr'
const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/clientes`)
    return {
        type: 'CLIENTES_FETCHED',
        payload: request
    }
}

export function create(values) {
    axios.post(`${BASE_URL}/clientes`, values)
        .then(resp => {
            toastr.success('Sucesso', 'Operação Realizada com sucesso.')
        })
        .catch(e => {
            e.response.data.errors.forEach(error => toastr.error('Erro', error))
        })
    return {
        type: 'TEMP'
    }
}