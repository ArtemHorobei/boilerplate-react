import * as axios from 'axios';
import * as camelize from 'camelize';
import get from 'lodash/get';
import {
  call,
  put,
  select,
  takeEvery,
} from 'redux-saga/effects';
import flow from 'lodash/flow';
import snakeCaseKeys from 'decamelize-keys-deep';
import Qs from 'qs';
import { showToastMessage } from '../../../app/containers/ToastMessagesContainer';
import { appendDot, capitalizeMessage } from '../../../utils';
import authSelectors from '../../auth/selectors';

import { ApiActions, API_ACTION_TYPES } from '../actions';
import { BASE_API_URL } from '../constants';

export default function* apiSaga() {
  yield takeEvery(API_ACTION_TYPES.API_REQUEST.ERROR, notifyError);
}

export function* sendApiRequest(request, meta = {
  asResponse: false,
  namespace: 'request',
  muteError: false,
  skipAuth: false,
}) {
  const startAction = ApiActions.apiRequest.start(request, meta);
  const { payload: { token } } = startAction;
  yield put(startAction);

  const headers = {
    ...request.headers || {},
  };

  if (!meta.skipAuth) {
    const authToken = yield select(authSelectors.getAuthToken);
    headers.Authorization = `Bearer ${authToken}`;
  }

  const result = {};

  try {
    result.response = yield call(
      fetchResource,
      request,
      headers,
    );
  } catch (error) {
    result.response = error.response || error;
    result.isError = true;
  }

  const { response } = result;

  if (result.isError) {
    const data = camelize(get(response, ['data', 'errors']));

    const errorPayload = {
      request,
      response,
      data,
      token,
    };

    yield put(
      ApiActions.apiRequest.error(errorPayload, meta),
    );

    if (response.status === 401) {
      yield put(
        ApiActions.apiRequest.unauthorizedError(errorPayload, meta),
      );
    }

    return {
      failed: true,
      payload: data,
    };
  }

  const data = camelize(get(response, ['data', 'data']));

  yield put(
    ApiActions.apiRequest.success(
      {
        request,
        response,
        data,
        token,
      },
      meta,
    ),
  );

  return {
    payload: meta.asResponse
      ? {
        data,
        request,
        response,
      }
      : data,
  };
}

export function createSendApiRequestSaga(
  createRequest,
  {
    start: actionStart,
    success: actionSuccess,
    error: actionError,
  },
  defaultMeta = {},
) {
  return function* wrappedSendApiRequestSaga(attributes, meta = {}) {
    const request = createRequest(attributes);

    yield put(actionStart(request));

    const result = yield sendApiRequest(request, {
      ...defaultMeta,
      ...meta,
    });

    if (result.failed) {
      yield put(actionError(result.payload));
    } else {
      yield put(actionSuccess(result.payload, meta));
    }

    return result;
  };
}

function* notifyError({ payload: { data, response }, meta }) {
  if (meta.muteError || response.status === 401) {
    yield null;
    return;
  }

  const errorHeader = meta.namespace
    ? (`${meta.namespace} failed`).replace(/^./, firstChar => firstChar.toUpperCase())
    : 'Something went wrong';

  if (data && data.length) {
    data.forEach(error => showToastMessage({
      header: errorHeader,
      content: formatErrorMessage(error),
      type: 'error',
    }));
  } else {
    showToastMessage({
      header: errorHeader,
      content: formatErrorMessage(data, response),
      type: 'error',
    });
  }

  yield null;

  function formatErrorMessage(error, { status } = {}) {
    if (!error || !error.message) {
      const statusMessage = ({
        500: 'Internal server error.',
        404: 'Not found.',
      })[status];

      return statusMessage || 'Unknown error.';
    }

    return flow(
      capitalizeMessage,
      appendDot,
    )(error.message);
  }
}

function fetchResource(
  {
    url,
    data = {},
    params = {},
    method = 'get',
  },
  headers = {},
) {
  const requestData = data instanceof FormData ? data : snakeCaseKeys(data);

  return axios({
    baseURL: BASE_API_URL,
    method,
    url,
    data: requestData,
    params: snakeCaseKeys(params),
    headers,
    paramsSerializer: rawParams => Qs.stringify(rawParams, { arrayFormat: 'brackets' }),
  });
}
