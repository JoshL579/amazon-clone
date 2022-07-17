import { get, post } from '../httpMethods'
import Cookie from 'js-cookie'

export const login = (payload) => {
    return post('/auth/login', payload)
}

export const signup = (payload) => {
    return post('/auth/signup', payload)
}

export const varifyToken = () => {
    return get('/auth/varification')
}