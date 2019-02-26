import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Loader } from 'semantic-ui-react';

import MghDimmer from '../FdsDimmer';

import cnNsp from './styles.module.scss';

const FdsLoader = ({
  className,
  style,
  children,
  fdsAsDimmer,
  fdsDimmerClassName,
  fdsDimmerStyle,
  active,
  ...props
}) => {
  const cn = cns(className, cnNsp._root, {
    [cnNsp.__asDimmer]: fdsAsDimmer,
  });

  const loaderComponent = (
    <Loader
      className={cn}
      style={style}
      active={active}
      {...props}
    >
      {children}
    </Loader>
  );

  if (fdsAsDimmer) {
    return (
      <MghDimmer
        inverted
        active={active}
        className={cns(cnNsp._dimmer, fdsDimmerClassName)}
        style={fdsDimmerStyle}
      >
        {loaderComponent}
      </MghDimmer>
    );
  }

  return loaderComponent;
};

FdsLoader.propTypes = {
  fdsAsDimmer: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

FdsLoader.defaultProps = {
  fdsAsDimmer: false,
  className: null,
  style: {},
};

export default FdsLoader;
