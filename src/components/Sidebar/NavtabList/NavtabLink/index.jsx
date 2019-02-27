import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Link } from 'react-router-dom';

import FdsIcon from '../../../../components/ui-kit/FdsIcon';

import cnNsp from './styles.module.scss';

export default function NavtabLink({
    active,
    linkTo,
    text,
    iconName,
    className,
    style,
}) {
    const cn = cns(
        className, cnNsp._root,
        {
            [cnNsp.__active]: active,
        },
    );

    return (
        <Link
            className={cn}
            style={style}
            to={linkTo}
        >
            <FdsIcon name={iconName} fitted size="small" />
            <div className={cnNsp._text}>
                {text}
            </div>
        </Link>
    );
}

NavtabLink.propTypes = {
    active: PropTypes.bool.isRequired,
    linkTo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.string),
};

NavtabLink.defaultProps = {
    className: null,
    style: {},
};
