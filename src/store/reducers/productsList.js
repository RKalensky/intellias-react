import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from '../actions/actionTypes';

const initialState = {
  fetched: false,
  list: [],
  isLoading: false,
  errorMessage: '',
};

const updateState = (state) => ({
  [FETCH_PRODUCTS_START]: () => ({ ...state, isLoading: true, errorMessage: '' }),
  [FETCH_PRODUCTS_ERROR]: (payload) => ({ ...state, errorMessage: payload, isLoading: false }),
  [FETCH_PRODUCTS_SUCCESS]: (payload) => ({
    ...state,
    fetched: true,
    errorMessage: '',
    list: payload,
    isLoading: false,
  }),
});

export default (state = initialState, { type, payload }) => {
  const updateStateHandler = updateState(state)[type];
  return updateStateHandler ? updateStateHandler(payload) : state;
};
