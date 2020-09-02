import { FETCH_VENDORS_START, FETCH_VENDORS_ERROR, FETCH_VENDORS_SUCCESS } from '../actions/actionTypes';

const initialState = {
  fetched: false,
  list: ['all'],
  isLoading: false,
};

const updateState = (state) => ({
  [FETCH_VENDORS_START]: () => ({ ...state, isLoading: true, errorMessage: '' }),
  [FETCH_VENDORS_ERROR]: (payload) => ({ ...state, errorMessage: payload, isLoading: false }),
  [FETCH_VENDORS_SUCCESS]: (payload) => ({
    ...state,
    fetched: true,
    errorMessage: '',
    list: [...state.list, ...payload],
    isLoading: false,
  }),
});

export default (state = initialState, { type, payload }) => {
  const updateStateHandler = updateState(state)[type];
  return updateStateHandler ? updateStateHandler(payload) : state;
};
