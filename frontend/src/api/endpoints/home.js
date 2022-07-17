import { get, post } from '../httpMethods'

export const getImages = (uid) => {
    return get(`/products/home?uid=${uid}`)
}
