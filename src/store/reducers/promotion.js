import { FETCH_PROMOTION_START, FETCH_PROMOTION_ERROR, FETCH_PROMOTION_SUCCESS } from '../actions/actionTypes';

const initialState = {
  data: {},
  isLoading: false,
};

const updateState = (state) => ({
  [FETCH_PROMOTION_START]: () => ({ ...state, isLoading: true }),
  [FETCH_PROMOTION_ERROR]: () => ({ ...state, isLoading: false }),
  [FETCH_PROMOTION_SUCCESS]: (payload) => ({
    ...state,
    data: payload,
    isLoading: false,
  }),
});

export default (state = initialState, { type, payload }) => {
  const updateStateHandler = updateState(state)[type];
  return updateStateHandler ? updateStateHandler(payload) : state;
};
