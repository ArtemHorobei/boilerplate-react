import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import cnNsp from './styles.module.scss';

const UnauthorizedPageLayout = ({
  className,
  children,
}) => {
  const cn = cns(className, cnNsp._root);
  return (
    <div className={cn}>
      <div>Logo</div>
        {children}
      <div>Footer</div>
    </div>
  );
};

UnauthorizedPageLayout.propTypes = {
  className: PropTypes.string,
};

UnauthorizedPageLayout.defaultProps = {
  className: '',
};

export default UnauthorizedPageLayout;
