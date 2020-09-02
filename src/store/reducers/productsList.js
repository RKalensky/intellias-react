import { FETCH_PRODUCTS_START, FETCH_PRODUCTS_ERROR, FETCH_PRODUCTS_SUCCESS } from '../actions/actionTypes';

const initialState = {
  list: [],
  isLoading: false,
  errorMessage: '',
};

const updateState = (state) => ({
  [FETCH_PRODUCTS_START]: () => ({ ...state, isLoading: true }),
  [FETCH_PRODUCTS_ERROR]: (payload) => ({ ...state, errorMessage: payload, isLoading: false }),
  [FETCH_PRODUCTS_SUCCESS]: (payload) => ({
    ...state,
    list: payload,
    isLoading: false,
  }),
});

export default (state = initialState, { type, payload }) => {
  const updateStateHandler = updateState(state)[type];
  return updateStateHandler ? updateStateHandler(payload) : state;
};
