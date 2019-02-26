import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import cnNsp from './styles.module.scss';

const CommonPageLayout = ({
  className,
  children,
}) => {
  const cn = cns(className, cnNsp._root);
  return (
    <div className={cn}>
      <div>Header</div>
      <div className={cnNsp._main}>
        <div>Sidebar</div>
        {children}
      </div>
      <div>Footer</div>
    </div>
  );
};

CommonPageLayout.propTypes = {
  className: PropTypes.string,
};

CommonPageLayout.defaultProps = {
  className: '',
};

export default CommonPageLayout;
