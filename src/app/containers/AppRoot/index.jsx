import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { configureStore, initialRootState } from '../../store';
import Routes from '../Routes';
// import GlobalModalsContainer from '../GlobalModalsContainer';
//import ToastMessagesContainer from '../ToastMessagesContainer';

import cnNsp from './styles.module.scss';

const store = configureStore({ ...initialRootState });

const AppRoot = () => (
  <Provider store={store}>
      <BrowserRouter>
          <div className={cnNsp._root}>
              <Routes />
          </div>
      </BrowserRouter>
  </Provider>
);

export default AppRoot;
