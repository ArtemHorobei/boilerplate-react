import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import App from '../../../modules/App';
// import LoginPage from '../../../modules/auth/containers/LoginPage';
// import ProfilePage from '../../../modules/auth/containers/ProfilePage';
// import RegistrationAdditionalInfoPage from '../../../modules/auth/containers/RegistrationAdditionalInfoPage';
// import RegistrationPage from '../../../modules/auth/containers/RegistrationPage';
// import PasswordResetPage from '../../../modules/auth/containers/PasswordResetPage';
// import RegistrationSelectionPage from '../../../modules/auth/containers/RegistrationSelectionPage';
// import UnauthorizedRoute from '../../../modules/auth/containers/UnauthorizedRoute';
// import DeliveryOrderDetailsPage from '../../../modules/delivery/containers/DeliveryOrderDetailsPage';
// import DeliveryOrderPaymentPage from '../../../modules/delivery/containers/DeliveryOrderPaymentPage';
// import DeliveryOrderQuotesPage from '../../../modules/delivery/containers/DeliveryOrderQuotesPage';
// import DeliveryOrdersListPage from '../../../modules/delivery/containers/DeliveryOrdersListPage';
// import DeliveryOrderNewPage from '../../../modules/delivery/containers/DevliveryOrderNewPage';
// import SupportPage from '../../../modules/support/containers/SupportPage';

export const PATHS = {
  LOGIN: '/login',
  HOME: '/',
};

export const redirectToDefault = <Redirect to={PATHS.HOME} />;

Routes.propTypes = {};

Routes.defaultProps = {};

export default function Routes() {
  return (
    <Switch>
      <Route exact path={PATHS.LOGIN} component={App} />
      {redirectToDefault}
    </Switch>
  );
}
