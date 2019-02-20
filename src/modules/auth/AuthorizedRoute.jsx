import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { compose } from 'recompose';
import MghLoader from 'mgh-ui-kit/MghLoader';
import withLoggedInFlag from '../hocs/withLoggedInFlag';
import authSelectors from '../selectors';
import LoginPage from './LoginPage';
import RegistrationCompletePage from './RegistrationCompletePage';

const mapStateToProps = state => ({
  isLoader: authSelectors.isInitialLoading(state),
  isIncompleteReg: authSelectors.isIncompleteReg(state),
});

const enhance = compose(
  connect(mapStateToProps),
  withLoggedInFlag,
);

const AuthorizedRoute = ({
  isLoader,
  isLoggedIn,
  isIncompleteReg,
  ...props
}) => {
  if (isLoader) {
    return (
      <MghLoader active />
    );
  }

  if (!isLoggedIn) {
    return (
      <Route {...props} component={LoginPage} />
    );
  }

  if (isIncompleteReg) {
    return (
      <Route {...props} component={RegistrationCompletePage} />
    );
  }

  return (
    <Route {...props} />
  );
};

AuthorizedRoute.propTypes = {
  isLoader: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  children: PropTypes.node,
};

AuthorizedRoute.defaultProps = {
  isLoader: true,
  isLoggedIn: false,
  children: null,
};

export default enhance(AuthorizedRoute);
