import { createSendApiRequestSaga } from './index';
import { API_ENDPOTINT, METHOD } from '../constants';
import { ApiActions } from '../actions';

const deliveryOrderApiSaga = {
  createDeliveryOrder: createSendApiRequestSaga(
    /**
     * @param {Object} data
     * @param {Object} data.deliveryOrder
     */
    data => ({
      method: METHOD.POST,
      url: API_ENDPOTINT.DELIVERY_ORDER.INDEX,
      data,
    }),
    ApiActions.deliveryOrder.createDeliveryOrder,
    {
      namespace: 'delivery order creation',
    },
  ),
  fetchDeliveryOrdersList: createSendApiRequestSaga(
    /**
     * @param {Object} params
     * @param {Number} params.page
     * @param {Number} params.perPage
     * @param {String[]} params.statuses
     * @param {Object} params.orderBy
     * @param {'asc'|'desc'} params.orderBy.createdAt
     * @param {'asc'|'desc'} params.orderBy.updatedAt
     */
    params => ({
      method: METHOD.GET,
      url: API_ENDPOTINT.DELIVERY_ORDER.INDEX,
      params,
    }),
    ApiActions.deliveryOrder.fetchDeliveryOrdersList,
    {
      namespace: 'delivery orders fetch',
    },
  ),
  fetchDeliveryOrderById: createSendApiRequestSaga(
    /**
     * @param {String} id
     */
    id => ({
      method: METHOD.GET,
      url: API_ENDPOTINT.DELIVERY_ORDER.BY_ID.INDEX.replace(/:id/, id),
    }),
    ApiActions.deliveryOrder.fetchDeliveryOrderById,
    {
      namespace: 'delivery order fetch',
    },
  ),
  fetchDeliveryOrderHistoryStatusesById: createSendApiRequestSaga(
    /**
     * @param {String} id
     */
    id => ({
      method: METHOD.GET,
      url: API_ENDPOTINT.DELIVERY_ORDER.BY_ID.STATUS_HISTORY.replace(/:id/, id),
    }),
    ApiActions.deliveryOrder.fetchDeliveryOrderHistoryStatusesById,
    {
      namespace: 'delivery order history fetch',
    },
  ),
};

export default deliveryOrderApiSaga;
