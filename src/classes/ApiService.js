import axios from 'axios'

export default class ApiService {
    static get(uri) {
        return axios.get(process.env.VUE_APP_API_URL + uri, this.headers())
    }
    static post(uri, data) {
        return axios.post(process.env.VUE_APP_API_URL + uri, data, this.headers())
    }
    static put(uri, data) {
        return axios.put(process.env.VUE_APP_API_URL + uri, data, this.headers())
    }
    static delete(uri) {
        return axios.delete(process.env.VUE_APP_API_URL + uri, this.headers())
    }

    static headers() {
        return {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('auth-token') || ''
            }
        }
    }
}
