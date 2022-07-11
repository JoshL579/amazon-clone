import requests from './requests'

export const get = (url, params) => {
    return requests.get(url, {
        params: params
    })
}

export const post = (url, payload, params) => {
    return requests.post(url, payload, {
        params: params
    })
}