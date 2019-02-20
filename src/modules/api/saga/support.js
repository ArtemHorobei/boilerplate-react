import { createSendApiRequestSaga } from './index';
import { API_ENDPOTINT, METHOD } from '../constants';
import { ApiActions } from '../actions';

const supportApiSaga = {
  sendComplaint: createSendApiRequestSaga(
    /**
     * @param {Object} data
     * @param {Object} data.complaint
     */
    data => ({
      method: METHOD.POST,
      url: API_ENDPOTINT.SUPPORT.INDEX,
      data,
    }),
    ApiActions.support.sendComplaint,
    {
      namespace: 'send complaint',
    },
  ),
};

export default supportApiSaga;
