import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../../../modules/App';

export const PATHS = {
  LOGIN: '/login',
  HOME: '/',
};

Routes.propTypes = {};

Routes.defaultProps = {};

export default function Routes() {
  return (
    <Switch>
      <Route exact path={PATHS.HOME} component={App} />
      <Route exact path={PATHS.LOGIN} component={App} />
    </Switch>
  );
}
