import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getList() {
    const request = axios.get(`${BASE_URL}/estacionamentos`)
    return {
        type: 'ESTACIONAMENTOS_FETCHED',
        payload: request
    }
}