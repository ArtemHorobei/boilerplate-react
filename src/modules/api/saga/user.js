import { createSendApiRequestSaga } from './index';
import { API_ENDPOTINT, METHOD } from '../constants';
import { ApiActions } from '../actions';

const userApiSaga = {
  authSignIn: createSendApiRequestSaga(
    /**
     * @param {Object} data.user
     * @param {String} data.user.login
     * @param {String} data.user.password
     */
    data => ({
      method: METHOD.POST,
      url: API_ENDPOTINT.USER.AUTH.SIGN_IN,
      data,
    }),
    ApiActions.user.auth.signIn,
    {
      namespace: 'login',
    },
  ),

  authSignUp: createSendApiRequestSaga(
    /**
     * @param {Object} data
     * @param {Object} data.contact
     * @param {String} data.contact.name
     * @param {String} data.contact.password
     * @param {String} data.contact.phone
     * @param {Boolean} data.contact.legalAgreement
     */
    data => ({
      method: METHOD.POST,
      url: API_ENDPOTINT.USER.AUTH.SIGN_UP,
      data,
    }),
    ApiActions.user.auth.signUp,
    {
      namespace: 'registration',
    },
  ),

  fetchUserProfile: createSendApiRequestSaga(
    () => ({
      method: METHOD.GET,
      url: API_ENDPOTINT.USER.PROFILE.INDEX,
    }),
    ApiActions.user.fetchUserProfile,
    {
      namespace: 'profile fetch',
    },
  ),

  updateUserProfile: createSendApiRequestSaga(
    /**
     *
     * @param {Object} data
     * @param {Object} data.profile
     * @param {String} data.email
     * @param {String} data.name
     */
    data => ({
      method: METHOD.PUT,
      url: API_ENDPOTINT.USER.PROFILE.INDEX,
      data,
    }),
    ApiActions.user.updateUserProfile,
    {
      namespace: 'profile update',
    },
  ),

  passwordChange: createSendApiRequestSaga(
    /**
     * @param {Object} data
     * @param {String} data.currentPassword
     * @param {String} data.newPassword
     */
    data => ({
      method: METHOD.PUT,
      url: API_ENDPOTINT.USER.PASSWORD.INDEX,
      data,
    }),
    ApiActions.user.password.change,
    {
      namespace: 'password change',
    },
  ),

  passwordReset: createSendApiRequestSaga(
    /**
     * @param {Object} data
     * @param {String} data.phone
     */
    data => ({
      method: METHOD.POST,
      url: API_ENDPOTINT.USER.PASSWORD.RESET.INDEX,
      data,
    }),
    ApiActions.user.password.reset,
    {
      namespace: 'password reset',
    },
  ),

  passwordResetConfirm: createSendApiRequestSaga(
    /**
     * @param {Object} params
     * @param {Object} params.pin
     * @param {Object} params.phone
     */
    params => ({
      method: METHOD.GET,
      url: API_ENDPOTINT.USER.PASSWORD.RESET.EDIT,
      params,
    }),
    ApiActions.user.password.resetConfirm,
    {
      namespace: 'password reset confirmation',
    },
  ),

  passwordResetUpdate: createSendApiRequestSaga(
    /**
     * @param {Object} data
     * @param {String} data.phone
     * @param {String} data.token
     * @param {String} data.password
     */
    data => ({
      method: METHOD.PUT,
      url: API_ENDPOTINT.USER.PASSWORD.RESET.INDEX,
      data,
    }),
    ApiActions.user.password.resetUpdate,
    {
      namespace: 'password update',
    },
  ),
};

export default userApiSaga;
