import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { reducer as modal } from 'redux-modal';
// import api from '../modules/api/index';
// import auth from '../modules/auth/index';
// import delivery from '../modules/delivery';
// import intl from '../modules/intl';
// import support from '../modules/support';

const reducers = combineReducers({
  modal,
  form,
});

export default reducers;
