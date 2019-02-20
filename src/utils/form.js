import { List, Map } from 'immutable';
import { call, put, take } from 'redux-saga/effects';
import { createAction, createSubSelectors } from './index';

export function createFormReducer(actionTypeNsp, initialState = Map({
  locked: false,
  backendErrors: List([]),
})) {
  return (state = initialState, { type, payload }) => {
    switch (type) {
      case actionTypeNsp.LOCK:
        return state.set('locked', payload);

      case actionTypeNsp.BACKEND_ERRORS:
        return state.set('backendErrors', List(payload || []));

      default:
        return state;
    }
  };
}

export function createFormSelectors(getState = state => state) {
  return createSubSelectors(getState, {
    locked: form => form.get('locked'),
    backendErrors: form => form.get('backendErrors').toJS(),
  });
}

export function createFormActions(actionTypeNsp) {
  return {
    lock: createAction(actionTypeNsp.LOCK),
    backendErrors: createAction(actionTypeNsp.BACKEND_ERRORS),
    submit: createAction(actionTypeNsp.SUBMIT),
  };
}

export function createFormSaga({
  action,
  actionType,
}, formBackendSaga) {
  return function* formSaga() {
    yield put(action.lock(false));

    while (true) {
      const submitAction = yield take(actionType.SUBMIT);

      yield put(action.lock(true));

      const { failed, payload } = yield call(formBackendSaga, submitAction);

      yield put(action.lock(false));

      if (failed) {
        yield put(action.backendErrors(payload));
      } else {
        yield put(action.backendSuccess(payload));
      }
    }
  };
}
