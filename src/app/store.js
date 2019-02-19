import {
  createStore,
  compose,
  applyMiddleware,
} from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';

import reducers from './reducers';
import rootSaga from './rootSaga';

const composeEnhancers = (
  process.env.NODE_ENV === 'development'
  // eslint-disable-next-line no-underscore-dangle
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || compose;

const monitor = process.env.NODE_ENV === 'development'
  // eslint-disable-next-line no-underscore-dangle
  && window.__SAGA_MONITOR_EXTENSION__;

export const sagaMiddleware = createSagaMiddleware({ sagaMonitor: monitor });

export const runRootSaga = () => sagaMiddleware.run(rootSaga);

export const initialRootState = {};

window.history.replaceState({}, '', window.location.hash.substring(2));
export const history = createBrowserHistory();

const middlewares = [
  sagaMiddleware,
  routerMiddleware(history),
];

export const configureStore = (initialState = { ...initialRootState }) => createStore(
  connectRouter(history)(reducers),
  initialState,
  composeEnhancers(
    applyMiddleware(...middlewares),
  ),
);
