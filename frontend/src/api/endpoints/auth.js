import { get, post } from '../httpMethods'

export const login = (payload) => {
    return post('/auth/login', payload)
}

export const signup = (payload) => {
    return post('/auth/signup', payload)
}