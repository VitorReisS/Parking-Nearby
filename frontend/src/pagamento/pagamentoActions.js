import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/pagamentos`)
    return {
        type: 'PAGAMENTOS_FETCHED',
        payload: request
    }
}