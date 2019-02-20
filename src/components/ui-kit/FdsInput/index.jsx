import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Input } from 'semantic-ui-react';

import cnNsp from './styles.module.scss';

class FdsInput extends Component {
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

    this.wrapperRef = React.createRef();
  }

  render() {
    const {
      className,
      style,
      children,
      input,
      ...props
    } = this.props;

    const cn = cns(className, cnNsp._root);

    return (
      <Input
        {...props}
        ref={this.wrapperRef}
        className={cn}
        style={style}
        input={{
          ...input,
          className: cns(input && input.className, cnNsp._input),
        }}
      >
        {children}
      </Input>
    );
  }
}


export default FdsInput;
