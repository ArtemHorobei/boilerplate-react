import { createSendApiRequestSaga } from './index';
import { API_ENDPOTINT, METHOD } from '../constants';
import { ApiActions } from '../actions';

const accountApiSaga = {
  fetchUserAccount: createSendApiRequestSaga(
    () => ({
      method: METHOD.GET,
      url: API_ENDPOTINT.USER.ACCOUNT.INDEX,
    }),
    ApiActions.account.fetchUserAccount,
    {
      namespace: 'account fetch',
    },
  ),
  updateUserAccount: createSendApiRequestSaga(
    /**
     * @param {Object} data
     * @param {Object} data.account
     */
    data => ({
      method: METHOD.PUT,
      url: API_ENDPOTINT.USER.ACCOUNT.INDEX,
      data,
    }),
    ApiActions.account.updateUserAccount,
    {
      namespace: 'account updating',
    },
  ),
  createContactPerson: createSendApiRequestSaga(
    /**
     * @param {Object} data
     * @param {Object} data.contactPerson
     * @param {String} data.contactPerson.fullName
     * @param {String} data.contactPerson.designation
     * @param {String} data.contactPerson.email
     * @param {String} data.contactPerson.phone
     */
    data => ({
      method: METHOD.POST,
      url: API_ENDPOTINT.USER.ACCOUNT.CONTACT_PERSONS.INDEX,
      data,
    }),
    ApiActions.account.contactPerson.create,
    {
      namespace: 'contact person creation',
    },
  ),
  updateContactPerson: createSendApiRequestSaga(
    /**
     * @param {Object} data
     * @param {Object} data.contactPerson
     * @param {String} data.contactPerson.id
     * @param {String} data.contactPerson.fullName
     * @param {String} data.contactPerson.designation
     * @param {String} data.contactPerson.email
     * @param {String} data.contactPerson.phone
     */
    data => ({
      method: METHOD.PUT,
      url: API_ENDPOTINT.USER.ACCOUNT.CONTACT_PERSONS.BY_ID.replace(
        /:id/,
        data.contactPerson.id,
      ),
      data,
    }),
    ApiActions.account.contactPerson.update,
    {
      namespace: 'contact person update',
    },
  ),
  removeContactPerson: createSendApiRequestSaga(
    /**
     * @param {String} id
     */
    id => ({
      method: METHOD.DELETE,
      url: API_ENDPOTINT.USER.ACCOUNT.CONTACT_PERSONS.BY_ID.replace(/:id/, id),
    }),
    ApiActions.account.contactPerson.remove,
    {
      namespace: 'contact person delete',
    },
  ),

  createHeadOfOrganization: createSendApiRequestSaga(
    /**
     * @param {Object} data
     * @param {Object} data.contactPerson
     * @param {String} data.contactPerson.fullName
     * @param {String} data.contactPerson.designation
     * @param {String} data.contactPerson.email
     * @param {String} data.contactPerson.phone
     */
    data => ({
      method: METHOD.POST,
      url: API_ENDPOTINT.USER.ACCOUNT.HEAD_OF_ORGANIZATION.INDEX,
      data,
    }),
    ApiActions.account.headOfOrganization.create,
    {
      namespace: 'head of organization creation',
    },
  ),
  updateHeadOfOrganization: createSendApiRequestSaga(
    /**
     * @param {Object} data
     * @param {Object} data.contactPerson
     * @param {String} data.contactPerson.id
     * @param {String} data.contactPerson.fullName
     * @param {String} data.contactPerson.designation
     * @param {String} data.contactPerson.email
     * @param {String} data.contactPerson.phone
     */
    data => ({
      method: METHOD.PUT,
      url: API_ENDPOTINT.USER.ACCOUNT.HEAD_OF_ORGANIZATION.INDEX,
      data,
    }),
    ApiActions.account.headOfOrganization.update,
    {
      namespace: 'head of organization update',
    },
  ),
  removeHeadOfOrganization: createSendApiRequestSaga(
    /**
     */
    () => ({
      method: METHOD.DELETE,
      url: API_ENDPOTINT.USER.ACCOUNT.HEAD_OF_ORGANIZATION.INDEX,
    }),
    ApiActions.account.headOfOrganization.remove,
    {
      namespace: 'head of organization delete',
    },
  ),

  createHeadOfAccounts: createSendApiRequestSaga(
    /**
     * @param {Object} data
     * @param {Object} data.contactPerson
     * @param {String} data.contactPerson.fullName
     * @param {String} data.contactPerson.designation
     * @param {String} data.contactPerson.email
     * @param {String} data.contactPerson.phone
     */
    data => ({
      method: METHOD.POST,
      url: API_ENDPOTINT.USER.ACCOUNT.HEAD_OF_ACCOUNTS.INDEX,
      data,
    }),
    ApiActions.account.headOfAccounts.create,
    {
      namespace: 'head of accounts creation',
    },
  ),
  updateHeadOfAccounts: createSendApiRequestSaga(
    /**
     * @param {Object} data
     * @param {Object} data.contactPerson
     * @param {String} data.contactPerson.id
     * @param {String} data.contactPerson.fullName
     * @param {String} data.contactPerson.designation
     * @param {String} data.contactPerson.email
     * @param {String} data.contactPerson.phone
     */
    data => ({
      method: METHOD.PUT,
      url: API_ENDPOTINT.USER.ACCOUNT.HEAD_OF_ACCOUNTS.INDEX,
      data,
    }),
    ApiActions.account.headOfAccounts.update,
    {
      namespace: 'head of accounts update',
    },
  ),
  removeHeadOfAccounts: createSendApiRequestSaga(
    /**
     */
    () => ({
      method: METHOD.DELETE,
      url: API_ENDPOTINT.USER.ACCOUNT.HEAD_OF_ACCOUNTS.INDEX,
    }),
    ApiActions.account.headOfAccounts.remove,
    {
      namespace: 'head of accounts delete',
    },
  ),
};

export default accountApiSaga;
