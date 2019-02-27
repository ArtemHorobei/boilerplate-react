export const BASE_API_URL = process.env.REACT_APP_API_HOST
  ? process.env.REACT_APP_API_HOST + process.env.REACT_APP_API_BASE_PATH
  : process.env.REACT_APP_API_BASE_PATH;

export const METHOD = {
  POST: 'post',
  GET: 'get',
  PUT: 'put',
  DELETE: 'delete',
};

export const SORTING_DIRECTION = {
  ASC: 'asc',
  DESC: 'desc',
};

export const API_ENDPOINT = {
  USER: {
    INDEX: 'v1/user',
    AUTH: {
      INDEX: 'v1/user/auth',
      SIGN_IN: 'v1/user/auth/sign_in',
      SIGN_UP: 'v1/user/auth/sign_up',
    },
    PROFILE: {
      INDEX: 'v1/user/profile',
    },
    PASSWORD: {
      INDEX: 'v1/user/password',
      RESET: {
        INDEX: 'v1/user/password/reset',
        EDIT: 'v1/user/password/reset/edit',
      },
    },
  },
  SUPPORT: {
    INDEX: 'v1/support/complaints',
  },
};
