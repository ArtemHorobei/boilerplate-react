import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Dimmer } from 'semantic-ui-react';

import cnNsp from './styles.module.scss';

MghDimmer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

MghDimmer.defaultProps = {
  className: null,
  style: {},
};

MghDimmer.Dimmable = ({
  className,
  style,
  ...props
}) => (
  <Dimmer.Dimmable
    className={className}
    style={style}
    {...props}
  />
);

export default function MghDimmer({
  className,
  style,
  ...props
}) {
  const cn = cns(className, cnNsp._root);

  return (
    <Dimmer
      className={cn}
      style={style}
      {...props}
    />
  );
}
