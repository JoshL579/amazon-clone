import Axios from 'axios'

const baseUrl = ''

const axios = Axios.create({
    baseUrl: baseUrl
})

axios.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axios.interceptors.response.use(
    (res) => {
        if (res.status === 200) {
            return res.data
        }
        if (res.status === 401) {
            // not authorized
            return res.data
        }
        return Promise.reject(res.data)
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axios