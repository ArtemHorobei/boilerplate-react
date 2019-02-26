import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Dropdown } from 'semantic-ui-react';

import cnNsp from './styles.module.scss';

class FdsDropdown extends Component {
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

  render() {
    const {
      className,
      style,
      children,
      ...props
    } = this.props;

    const cn = cns(className, cnNsp._root);

    return (
      <Dropdown
        {...props}
        className={cn}
        style={style}
      >
        {children}
      </Dropdown>
    );
  }
}


export default FdsDropdown;
