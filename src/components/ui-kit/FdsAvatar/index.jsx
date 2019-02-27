import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';

import defaultAvatar from '../../../assets/images/profile-default.jpg';

import cnNsp from './styles.module.scss';

const avatarSizes = {
    small: cnNsp._avatarSmall,
    medium: cnNsp._avatarMedium,
    large: cnNsp._avatarLarge,
};

const Avatar = ({
    className,
    source = defaultAvatar,
    size = 'small',
}) => {
  const cn = cns(className, cnNsp._root);

  console.log(avatarSizes[size]);

  return (
    <div className={cn}>
        <img
            src={source}
            alt="avatar"
            className={cns(cnNsp._avatar, avatarSizes[size])}
        />
    </div>
  );
};

Avatar.propTypes = {
  className: PropTypes.string,
};

Avatar.defaultProps = {
  className: '',
};

export default Avatar;
