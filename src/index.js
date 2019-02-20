import React from 'react';
import ReactDOM from 'react-dom';

import AppRoot from './app/containers/AppRoot';
import { runRootSaga } from './app/store';

import './assets/stylesheets/index.scss';

runRootSaga();

ReactDOM.render(
    <AppRoot />,
    document.getElementById('root'),
);
