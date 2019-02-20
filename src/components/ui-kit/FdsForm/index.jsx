import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Form } from 'semantic-ui-react';
import Field from './Field';

import cnNsp from './styles.module.scss';

const FdsForm = ({
    className,
    style,
    children,
    ...props
}) => {
    const cn = cns(className, cnNsp._root);

    return (
        <Form
            {...props}
            className={cn}
            style={style}
        >
            {children}
        </Form>
    );
};

FdsForm.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.objectOf(PropTypes.string),
};

FdsForm.defaultProps = {
    className: null,
    children: null,
    style: {},
};

FdsForm.Field = Field;

export default FdsForm;
