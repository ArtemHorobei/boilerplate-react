import { ApiActions } from '../actions';
import { API_ENDPOTINT, METHOD } from '../constants';
import { createSendApiRequestSaga } from './index';

const paymentApiSaga = {
  setDeliveryOrderPaymentMethod: createSendApiRequestSaga(
    ({ deliveryOrderId, data }) => ({
      method: METHOD.POST,
      url: API_ENDPOTINT.PAYMENT.DELIVERY_ORDER.BY_ID.PAYMENTS.INDEX.replace(/:deliveryOrderId/, deliveryOrderId),
      data,
    }),
    ApiActions.payment.setDeliveryOrderPaymentMethod,
    {
      namespace: 'delivery order payment method set',
    },
  ),
};

export default paymentApiSaga;
