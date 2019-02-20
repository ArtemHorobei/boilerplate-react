import { compose } from 'recompose';
import FdsInput from '../../../FdsInput';
import {
  isMaxLength,
  isMinLength,
  isNoEndSpace,
  isNoStartSpace,
  isNoSuccessiveSpaces,
} from '../commonValidators';

import asFormField from '../asFormField';

const maxLength = 128;

const enhance = compose(
  asFormField({
    validators: [
      isMinLength(5),
      isMaxLength(maxLength),
      isNoStartSpace,
      isNoEndSpace,
      isNoSuccessiveSpaces,
      isEmailFormat,
    ],
    label: 'E-mail',
    placeholder: 'example@mail.com',
    controlProps: {
      input: {
        maxLength,
      },
    },
  }),
);

const Email = enhance(FdsInput);

export default Email;

function isEmailFormat(value) {
  if (!value) {
    return undefined;
  }

  return /^[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~.,]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/i.test(value)
    ? undefined
    : 'Invalid email address';
}
