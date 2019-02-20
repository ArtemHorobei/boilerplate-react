import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import cns from 'classnames';

import FdsForm from '../../../../components/ui-kit/FdsForm';
import FdsButton from '../../../../components/ui-kit/FdsButton';

import cnNsp from './styles.module.scss';

const FORM_ID = 'loginForm';

@reduxForm({
  form: FORM_ID,
})
class LoginForm extends React.Component {
  static propTypes = {
    className: PropTypes.string,
  };
  static defaultProps = {
    className: '',
  };

  render () {
    const { className } = this.props;

    const cn = cns(className, cnNsp._root);

    return (
        <div className={cn}>
            <FdsForm>

                <FdsForm.Field.Email
                    label="Email"
                    name="email"
                    placeholder="Enter your email"
                    customControlProps={{
                        input: { autoFocus: true },
                    }}
                    required
                />

                <FdsForm.Field.Password
                    label="Password"
                    name="password"
                    placeholder="Enter your password"
                    required
                />

                <FdsButton>LOGIN</FdsButton>

            </FdsForm>
        </div>
    )
  }
}

export default LoginForm;
