import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore, history, initialRootState } from '../../store';
// import GlobalModalsContainer from '../GlobalModalsContainer';
import Routes from '../Routes';
//import ToastMessagesContainer from '../ToastMessagesContainer';

import cnNsp from './styles.module.scss';

const store = configureStore({ ...initialRootState });

const AppRoot = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div className={cnNsp._root}>
        <Routes />
      </div>
    </ConnectedRouter>
  </Provider>
);

export default AppRoot;
