import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import cnNsp from './styles.module.scss';

const ErrorCaption = ({
  isVisible,
  message,
  className,
  style,
}) => {
  const cn = cns(className, cnNsp._root, {
    [cnNsp.__hidden]: !isVisible,
  });

  return (
    <div
      className={cn}
      style={style}
    >
      <div className={cns(cnNsp._message, 'mgh_fontSize12')}>
        {message}
      </div>
    </div>
  );
};

ErrorCaption.propTypes = {
  className: PropTypes.string,
  isVisible: PropTypes.bool,
  message: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

ErrorCaption.defaultProps = {
  isVisible: false,
  message: 'Value is invalid',
  className: null,
  style: {},
};

export default ErrorCaption;
