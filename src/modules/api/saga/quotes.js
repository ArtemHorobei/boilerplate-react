import { ApiActions } from '../actions';
import { API_ENDPOTINT, METHOD } from '../constants';
import { createSendApiRequestSaga } from './index';

const quotesApiSaga = {
  fetchDeliveryOrderQuotes: createSendApiRequestSaga(
    deliveryOrderId => ({
      method: METHOD.GET,
      url: API_ENDPOTINT.QUOTES.INDEX,
      params: {
        deliveryOrderId,
      },
    }),
    ApiActions.quotes.fetchDeliveryOrderQuotes,
    {
      namespace: 'delivery order quotes fetch',
    },
  ),
  bookDeliveryOrderQuote: createSendApiRequestSaga(
    ({ deliveryOrderId, quoteKind }) => ({
      method: METHOD.POST,
      url: API_ENDPOTINT.DELIVERY_ORDER.BY_ID.QUOTE.replace(/:id/, deliveryOrderId),
      params: {
        kind: quoteKind,
      },
    }),
    ApiActions.quotes.bookDeliveryOrderQuote,
    {
      namespace: 'delivery order quote book',
    },
  ),
};

export default quotesApiSaga;
