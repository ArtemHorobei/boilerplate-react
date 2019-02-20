import React from 'react';
import { Field } from 'redux-form';
import { isRequired } from './commonValidators';
import FdsForm from '../../FdsForm';
import ErrorCaption from './ErrorCaption';

const asFormField = ({
  label: basicLabel,
  placeholder: basicPlaceholder,
  validators: basicValidators = [],
  fieldProps: basicFieldProps = {},
  controlProps,
  complex,
  labelOnControl,
  passMeta,
  showErrorsWhileActive,
} = {}) => (
  WrappedControlComponent,
) => {
  return function FieldWrap({
    placeholder,
    name,
    label,
    validators = [],
    required,
    ...props
  }) {
    return (
      <Field
        {...basicFieldProps}
        {...props}
        required={required}
        label={label || basicLabel}
        placeholder={placeholder || basicPlaceholder}
        name={name}
        component={FormFieldControl}
        validate={[
          ...(
            required ? [isRequired] : []
          ),
          ...basicValidators,
          ...validators,
        ]}
      />
    );
  };

  function FormFieldControl({
    input: inputProps,
    meta,
    name,
    label,
    placeholder,
    disabled,
    errorCollapses,
    customControlProps,
    alwaysShowError,
  }) {
    const visibleError = meta
    && meta.error
    && (
      alwaysShowError
      || (
        meta.touched
        && (showErrorsWhileActive || !meta.active)
      )
    )
      ? meta.error
      : null;

    return (
      <FdsForm.Field
        error={!!visibleError}
      >
        {!labelOnControl && (
          <label htmlFor={name}>
            {label}
          </label>
        )}

        <WrappedControlComponent
          placeholder={placeholder}
          {...inputProps}
          value={complex && !inputProps.value ? null : inputProps.value}
          type={complex ? null : inputProps.type}
          {...controlProps}
          label={labelOnControl ? label : null}
          {...customControlProps}
          disabled={disabled}
          {...(
            passMeta
              ? { fieldMeta: meta }
              : {}
          )}
        />

        {(!errorCollapses || !!visibleError) && (
          <ErrorCaption
            isVisible={!!visibleError}
            message={meta && meta.error}
          />
        )}
      </FdsForm.Field>
    );
  }
};

export default asFormField;
