import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import FdsAvatar from '../../components/ui-kit/FdsAvatar';
import NavtabList from './NavtabList';
import batman from '../../assets/images/batman.jpg';

import cnNsp from './styles.module.scss';

const Sidebar = ({
  className,
}) => {
  const cn = cns(className, cnNsp._root);
  return (
    <div className={cn}>
        <div className={cnNsp._avatar}>
            <FdsAvatar source={batman} size="large" />
        </div>
        <NavtabList />
    </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
};

Sidebar.defaultProps = {
  className: '',
};

export default Sidebar;
