import Axios from 'axios'

const baseUrl = ''

const reqeusts = Axios.create({
    baseURL: baseUrl,
    withCredentials: true
})

reqeusts.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

reqeusts.interceptors.response.use(
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

export default reqeusts