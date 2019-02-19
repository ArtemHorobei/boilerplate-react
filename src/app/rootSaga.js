import { all } from 'redux-saga/effects';
// import apiSaga from '../modules/api/saga';
// import authSaga from '../modules/auth/saga';
// import deliverySaga from '../modules/delivery/saga';
// import supportSaga from '../modules/support/saga';

export default function* rootSaga() {
  yield all([
    // apiSaga(),
    // authSaga(),
    // deliverySaga(),
    // supportSaga(),
  ]);
}
