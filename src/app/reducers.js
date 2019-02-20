import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as modal } from 'redux-modal';

const reducers = combineReducers({
  modal,
  form,
});

export default reducers;
