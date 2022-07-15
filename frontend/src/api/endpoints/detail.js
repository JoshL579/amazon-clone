import { get, post } from '../httpMethods'

export const getProductDetail = (id) => {
    return get(`/products/${id}`)
}
