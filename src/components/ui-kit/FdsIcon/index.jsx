import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';

Icon.propTypes = {
  ...Icon.propTypes,
  name: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
};

const FdsIcon = ({ mghDictionary, ...props }) => <Icon {...props} />;

FdsIcon.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.objectOf(PropTypes.string),
};

FdsIcon.defaultProps = {
  className: null,
  styles: null,
};

export default FdsIcon;
