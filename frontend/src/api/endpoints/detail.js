import { get, post } from '../httpMethods'

export const getProductDetail = (id, uid) => {
    return get(`/products/${id}?uid=${uid}`)
}
