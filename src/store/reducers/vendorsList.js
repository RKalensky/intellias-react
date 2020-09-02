import { FETCH_VENDORS_START, FETCH_VENDORS_ERROR, FETCH_VENDORS_SUCCESS } from '../actions/actionTypes';

const initialState = {
  list: ['all'],
  isLoading: false,
};

const updateState = (state) => ({
  [FETCH_VENDORS_START]: () => ({ ...state, isLoading: true }),
  [FETCH_VENDORS_ERROR]: () => ({ ...state, isLoading: false }),
  [FETCH_VENDORS_SUCCESS]: (payload) => ({
    ...state,
    list: [...state.list, ...payload],
    isLoading: false,
  }),
});

export default (state = initialState, { type, payload }) => {
  const updateStateHandler = updateState(state)[type];
  return updateStateHandler ? updateStateHandler(payload) : state;
};
