import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import LoginPage from '../../../modules/auth/containers/LoginPage';
import Dashboard from '../../../modules/dashboard/containers/Dashboard';

export const PATHS = {
  LOGIN: '/login',
  HOME: '/',
};

Routes.propTypes = {};

Routes.defaultProps = {};

export const redirectToDefault = <Redirect to={PATHS.HOME} />;

export default function Routes() {
  return (
    <Switch>
      <Route exact path={PATHS.HOME} component={Dashboard} />
      <Route exact path={PATHS.LOGIN} component={LoginPage} />
    </Switch>
  );
}
