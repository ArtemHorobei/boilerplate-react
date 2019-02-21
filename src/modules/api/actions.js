import { createAction, createAsyncActions } from '../../utils';

const API = {
  API_REQUEST: {
    START: 'API.API_REQUEST.START',
    ERROR: 'API.API_REQUEST.ERROR',
    UNAUTHORIZED_ERROR: 'API.API_REQUEST.UNAUTHORIZED_ERROR',
    SUCCESS: 'API.API_REQUEST.SUCCESS',
  },
  USER: {
    AUTH: {
      SIGN_IN: {
        START: 'API.USER.AUTH.SIGN_IN.START',
        SUCCESS: 'API.USER.AUTH.SIGN_IN.SUCCESS',
        ERROR: 'API.USER.AUTH.SIGN_IN.ERROR',
      },
      SIGN_UP: {
        START: 'API.USER.AUTH.SIGN_UP.START',
        SUCCESS: 'API.USER.AUTH.SIGN_UP.SUCCESS',
        ERROR: 'API.USER.AUTH.SIGN_UP.ERROR',
      },
    },
    PASSWORD: {
      CHANGE: {
        START: 'API.USER.PASSWORD.CHANGE.START',
        SUCCESS: 'API.USER.PASSWORD.CHANGE.SUCCESS',
        ERROR: 'API.USER.PASSWORD.CHANGE.ERROR',
      },
      RESET: {
        START: 'API.USER.PASSWORD.RESET.START',
        SUCCESS: 'API.USER.PASSWORD.RESET.SUCCESS',
        ERROR: 'API.USER.PASSWORD.RESET.ERROR',
      },
      RESET_CONFIRM: {
        START: 'API.USER.PASSWORD.RESET_CONFIRM.START',
        SUCCESS: 'API.USER.PASSWORD.RESET_CONFIRM.SUCCESS',
        ERROR: 'API.USER.PASSWORD.RESET_CONFIRM.ERROR',
      },
      UPDATE: {
        START: 'API.USER.PASSWORD.UPDATE.START',
        SUCCESS: 'API.USER.PASSWORD.UPDATE.SUCCESS',
        ERROR: 'API.USER.PASSWORD.UPDATE.ERROR',
      },
    },
    FETCH_USER_PROFILE: {
      START: 'API.ACCOUNT.FETCH_USER_PROFILE.START',
      SUCCESS: 'API.ACCOUNT.FETCH_USER_PROFILE.SUCCESS',
      ERROR: 'API.ACCOUNT.FETCH_USER_PROFILE.ERROR',
    },
    UPDATE_USER_PROFILE: {
      START: 'API.ACCOUNT.UPDATE_USER_PROFILE.START',
      SUCCESS: 'API.ACCOUNT.UPDATE_USER_PROFILE.SUCCESS',
      ERROR: 'API.ACCOUNT.UPDATE_USER_PROFILE.ERROR',
    },
  },
  SUPPORT: {
    SEND: {
      START: 'API.SUPPORT.SEND.START',
      SUCCESS: 'API.SUPPORT.SEND.SUCCESS',
      ERROR: 'API.SUPPORT.SEND.ERROR',
    },
  },
};

export { API as API_ACTION_TYPES };

export const ApiActions = {
  apiRequest: {
    start: (request, meta) => ({
      type: API.API_REQUEST.START,
      payload: {
        request,
        token: Symbol('REQUEST_TOKEN'),
      },
      meta,
    }),
    success: createAction(API.API_REQUEST.SUCCESS),
    error: createAction(API.API_REQUEST.ERROR),
    unauthorizedError: createAction(API.API_REQUEST.UNAUTHORIZED_ERROR),
  },
  user: {
    auth: {
      signIn: createAsyncActions(API.USER.AUTH.SIGN_IN),
      signUp: createAsyncActions(API.USER.AUTH.SIGN_UP),
    },
    password: {
      change: createAsyncActions(API.USER.PASSWORD.CHANGE),
      reset: createAsyncActions(API.USER.PASSWORD.RESET),
      resetConfirm: createAsyncActions(API.USER.PASSWORD.RESET_CONFIRM),
      resetUpdate: createAsyncActions(API.USER.PASSWORD.UPDATE),
    },
  },
  support: {
    sendComplaint: createAsyncActions(API.SUPPORT.SEND),
  },
};
