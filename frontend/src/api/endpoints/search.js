import { get, post } from "../httpMethods";

export const apiGetSearchResult = (keywords) => {
  return get(`/products/allproducts?keywords=${keywords}`);
};
