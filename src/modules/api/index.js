import { List, Map } from 'immutable';
import { API_ACTION_TYPES } from './actions';

const initialState = Map({
  pendingRequests: List([]),
});

const api = (state = initialState, { type, payload }) => {
  switch (type) {
    case API_ACTION_TYPES.API_REQUEST.START:
      return state.updateIn(
        ['pendingRequests'],
        list => list.push(payload),
      );
    case API_ACTION_TYPES.API_REQUEST.SUCCESS:
    case API_ACTION_TYPES.API_REQUEST.ERROR:
      return state.updateIn(
        ['pendingRequests'],
        list => list.filter(pendingRequest => pendingRequest.token !== payload.token),
      );
    default:
      return state;
  }
};

export default api;
