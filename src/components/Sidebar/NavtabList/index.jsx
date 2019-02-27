import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import NavtabLink from './NavtabLink';
import { PATHS } from '../../../app/containers/Routes';

import cnNsp from './styles.module.scss';

const NavtabList = ({
  className,
}) => {
  const cn = cns(className, cnNsp._root);

  const renderTabs = () => {
      return [
          {
              active: true,
              text: 'First tab',
              iconName: 'account circle',
              linkTo: PATHS.HOME,
          },
          {
              active: false,
              text: 'Second tab',
              iconName: 'chat bubble',
              linkTo: PATHS.LOGIN,
          },
      ]
  };

  return (
    <div className={cn}>
        {renderTabs().map(tab => (
            <div key={tab.text}>
                <NavtabLink {...tab} />
            </div>
        ))}
    </div>
  );
};

NavtabList.propTypes = {
  className: PropTypes.string,
};

NavtabList.defaultProps = {
  className: '',
};

export default NavtabList;
