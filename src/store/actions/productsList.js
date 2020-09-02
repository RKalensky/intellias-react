import fetchData from '../../services/fetchData';
import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from './actionTypes';

export function fetchProductsStart() {
  return {
    type: FETCH_PRODUCTS_START,
  };
}

export function fetchProductsError(payload) {
  return {
    type: FETCH_PRODUCTS_ERROR,
    payload,
  };
}

export function fetchProductsSuccess(payload) {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload,
  };
}

export function fetchProducts(searchString = '', vendor = '') {
  return async (dispatch) => {
    try {
      dispatch(fetchProductsStart());
      const { data: { products } } = await fetchData('/api/getProducts', { name: searchString, vendor });
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      dispatch(fetchProductsError(error));
    }
  };
}
