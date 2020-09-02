import fetchData from '../../services/fetchData';
import { FETCH_VENDORS_START, FETCH_VENDORS_ERROR, FETCH_VENDORS_SUCCESS } from './actionTypes';

export function fetchVendorsStart() {
  return {
    type: FETCH_VENDORS_START,
  };
}

export function fetchVendorsError(payload) {
  return {
    type: FETCH_VENDORS_ERROR,
    payload,
  };
}

export function fetchVendorsSuccess(payload) {
  return {
    type: FETCH_VENDORS_SUCCESS,
    payload,
  };
}

export function fetchVendors() {
  return async (dispatch) => {
    try {
      dispatch(fetchVendorsStart());
      const { data: { vendors } } = await fetchData('/api/getVendors');
      dispatch(fetchVendorsSuccess(vendors));
    } catch (error) {
      dispatch(fetchVendorsError(error));
    }
  };
}
