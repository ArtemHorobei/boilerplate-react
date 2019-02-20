import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { compose } from 'recompose';
import { redirectToDefault } from '../../../app/containers/Routes';
import withLoggedInFlag from '../hocs/withLoggedInFlag';

const UnauthorizedRoute = ({
  isLoggedIn,
  ...props
}) => {
  if (isLoggedIn) {
    return redirectToDefault;
  }

  return (
    <Route {...props} />
  );
};

UnauthorizedRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  children: PropTypes.node,
  renderFallback: PropTypes.func,
};

UnauthorizedRoute.defaultProps = {
  children: null,
  renderFallback: () => null,
};

const enhance = compose(
  withLoggedInFlag,
);

export default enhance(UnauthorizedRoute);
