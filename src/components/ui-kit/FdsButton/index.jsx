import cns from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'semantic-ui-react';

import cnNsp from './styles.module.scss';

const FdsButton = ({
  className,
  mghLink,
  mghTextLink,
  mghAsWrap,
  type,
  ...props
}) => {
  if (mghAsWrap) {
    const cn = cns(className, cnNsp._root, cnNsp.__wrap);

    return (
      <div
        className={cn}
        {...props}
      />
    );
  }

  const cn = cns(className, cnNsp._root, {
    [cnNsp.__link]: mghLink || mghTextLink,
    [cnNsp.__textLink]: mghTextLink,
  });

  return (
    <Button
      secondary={mghTextLink}
      {...props}
      className={cn}
      type={type || 'button'}
    />
  );
};

FdsButton.propTypes = {
  ...Button.propTypes,
  mghLink: PropTypes.bool,
  mghTextLink: PropTypes.bool,
  mghAsWrap: PropTypes.bool,
  className: PropTypes.string,
};

FdsButton.defaultProps = {
  mghAsWrap: false,
  mghLink: false,
  mghTextLink: false,
  className: null,
};

export default FdsButton;
