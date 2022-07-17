import requests from './requests'

export const get = (url, params, header = null) => {
    return requests.get(url, {
        params: params,
        ...header ? { headers: header } : null
    })
}

export const post = (url, payload, params) => {
    return requests.post(url, payload, {
        params: params
    })
}