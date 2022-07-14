import { get, post } from '../httpMethods'

export const getImages = () => {
    return get('/products/home')
}
