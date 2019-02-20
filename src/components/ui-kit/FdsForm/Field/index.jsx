import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Form } from 'semantic-ui-react';

import Email from './Email';
import Password from './Password';

import cnNsp from './styles.module.scss';

const Field = ({
  className,
  style,
  children,
  ...props
}) => {
  const cn = cns(className, cnNsp._root);

  return (
    <Form.Field
      {...props}
      className={cn}
      style={style}
    >
      {children}
    </Form.Field>
  );
};

Field.propTypes = {
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string),
};

Field.defaultProps = {
  className: null,
  style: {},
};

Field.Email = Email;

Field.Password = Password;

export default Field;
