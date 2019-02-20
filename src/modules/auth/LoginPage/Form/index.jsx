import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import cns from 'classnames';
import { Input } from 'semantic-ui-react';
import { Field } from 'redux-form';

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
            <form action="">
                <div>
                    <label>Email</label>
                    <div>
                        <Field
                            name="email"
                            component="input"
                            type="text"
                            placeholder="Email"
                            label="Email"
                        />
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <Field
                            name="password"
                            component="input"
                            type="text"
                            placeholder="Password"
                            label="Password"
                        />
                    </div>
                </div>
            </form>
        </div>
    )
  }
}

export default LoginForm;
