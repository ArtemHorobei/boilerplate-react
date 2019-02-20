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

export const API_ENDPOTINT = {
  DELIVERY_ORDER: {
    INDEX: 'v1/delivery_orders',
    BY_ID: {
      INDEX: 'v1/delivery_orders/:id',
      STATUS_HISTORY: 'v1/delivery_orders/:id/status_history',
      QUOTE: 'v1/delivery_orders/:id/quota',
      PAYMENT: 'v1/payment/delivery_orders/:id/payments',
    },
  },
  USER: {
    INDEX: 'v1/user',
    ACCOUNT: {
      INDEX: 'v1/user/account',
      CONTACT_PERSONS: {
        INDEX: 'v1/user/account/contact_persons',
        BY_ID: 'v1/user/account/contact_persons/:id',
      },
      HEAD_OF_ORGANIZATION: {
        INDEX: 'v1/user/account/head_of_organization',
      },
      HEAD_OF_ACCOUNTS: {
        INDEX: 'v1/user/account/head_of_accounts',
      },
    },
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
      // EDIT: 'v1/user/password/edit',
      RESET: {
        INDEX: 'v1/user/password/reset',
        EDIT: 'v1/user/password/reset/edit',
      },
    },
  },
  QUOTES: {
    INDEX: 'v1/quotas',
  },
  PAYMENT: {
    DELIVERY_ORDER: {
      BY_ID: {
        PAYMENTS: {
          INDEX: 'v1/payment/delivery_orders/:deliveryOrderId/payments',
        },
      },
    },
  },
  SUPPORT: {
    INDEX: 'v1/support/complaints',
  },
};
