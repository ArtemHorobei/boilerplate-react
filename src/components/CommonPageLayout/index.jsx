import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import Sidebar from '../Sidebar';

import cnNsp from './styles.module.scss';

const CommonPageLayout = ({
  className,
  children,
}) => {
  const cn = cns(className, cnNsp._root);
  return (
    <div className={cn}>
      <div className={cnNsp._header}>Header</div>
      <div className={cnNsp._main}>
        <Sidebar />
        {children}
      </div>
      <div className={cnNsp._footer}>Footer</div>
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
