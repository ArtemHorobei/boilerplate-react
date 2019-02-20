import {
  put,
  take, takeLatest,
} from 'redux-saga/effects';
import { createSelector } from 'reselect';

export * from './form';
export * from './enum';

export function createAsyncActions(typeNsp) {
  return {
    start: createAction(typeNsp.START),
    success: createAction(typeNsp.SUCCESS),
    error: createAction(typeNsp.ERROR),
  };
}

export function createAction(type) {
  return (payload, meta) => ({
    type,
    payload,
    meta,
  });
}

export function jsonParse(placeStr) {
  let parsed = {};

  try {
    parsed = JSON.parse(placeStr);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error('Error while parsing json str field value');
  }

  return parsed;
}

export function capitalizeMessage(message) {
  return message.replace(/^./, char => char.toUpperCase());
}

export function appendDot(message) {
  return message.replace(/.$/, char => (char === '.' ? char : `${char}.`));
}

export function formatAsSentence(message) {
  return appendDot(
    capitalizeMessage(message),
  );
}

export function createSubSelectors(getSubState = state => state, selectorsMap = {}) {
  return Object.entries(selectorsMap).reduce((selectors, [name, selector]) => ({
    ...selectors,
    [name]: createSelector(
      getSubState,
      selector,
    ),
  }), {});
}

export function createModalSaga({
  action,
  actionType,
}, {
  onCloseActionType,
}) {
  return function* watchModalOpenSaga() {
    yield takeLatest(actionType.OPEN, modalSaga);
  };

  function* modalSaga({ payload: { modalProps } }) {
    yield put(action.show(modalProps));

    yield take(onCloseActionType);

    yield put(action.hide());
  }
}

export function formatPrice(price) {
  const [int, dec] = (price / 100).toFixed(2).split('.');

  const intResult = int.split(/(?=(?:\d{3})+(?!\d))/).join(',');

  return [intResult, dec].join('.');
}
