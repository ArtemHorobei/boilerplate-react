import React from 'react';
import ReactDOM from 'react-dom';
import AppRoot from './app/containers/AppRoot';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppRoot />, document.getElementById('root'));

serviceWorker.unregister();
