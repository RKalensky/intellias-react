import fetchData from '../../services/fetchData';
import { FETCH_PROMOTION_START, FETCH_PROMOTION_ERROR, FETCH_PROMOTION_SUCCESS } from './actionTypes';

export function fetchPromotionStart() {
  return {
    type: FETCH_PROMOTION_START,
  };
}

export function fetchPromotionError(payload) {
  return {
    type: FETCH_PROMOTION_ERROR,
    payload,
  };
}

export function fetchPromotionSuccess(payload) {
  return {
    type: FETCH_PROMOTION_SUCCESS,
    payload,
  };
}

export function fetchPromotion() {
  return async (dispatch) => {
    try {
      dispatch(fetchPromotionStart());
      const { data: { promotion } } = await fetchData('/api/getPromotion');
      dispatch(fetchPromotionSuccess(promotion));
    } catch (error) {
      dispatch(fetchPromotionError(error));
    }
  };
}
