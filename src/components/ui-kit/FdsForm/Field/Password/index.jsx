import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import FdsInput from '../../../FdsInput';
import asFormField from '../asFormField';
import { isMaxLength, isMinLength } from '../commonValidators';

import cnNsp from './styles.module.scss';

@asFormField({
  validators: [
    isMinLength(8),
    isMaxLength(20),
    isPasswordFormat,
  ],
  label: 'Password',
  placeholder: 'Enter your password',
})
class Password extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    style: PropTypes.objectOf(PropTypes.string),
  };

  static defaultProps = {
    className: null,
    children: null,
    style: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };
  }

  toggleVisibility = () => {
    this.setState(({ isVisible }) => ({
      isVisible: !isVisible,
    }));
  };

  render() {
    const {
      className,
      style,
      children,
      ...props
    } = this.props;

    const {
      isVisible,
    } = this.state;

    const cn = cns(className, cnNsp._root);

    return (
      <FdsInput
        {...props}
        className={cn}
        style={style}
        type={isVisible ? 'text' : 'password'}
      >
        {children}
      </FdsInput>
    );
  }
}

export default Password;

function isPasswordFormat(value) {
  return /^[A-z0-9!#$%&'+\-/=?^_`{|}~.,]{8,20}$/.test(value)
    ? undefined
    : 'Must not use restricted symbols';
}
