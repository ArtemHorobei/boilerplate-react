export function isRequired(value) {
  return value
    ? undefined
    : 'Field is required';
}

export function isMaxLength(maxLength) {
  return (value) => {
    if (value) {
      return value.length > maxLength
        ? `Length must be less than ${maxLength} characters`
        : undefined;
    }
    return undefined;
  };
}

export function isMinLength(minLength) {
  return (value) => {
    if (value) {
      return value.length < minLength
        ? `Length must be more than ${minLength} characters`
        : undefined;
    }
    return undefined;
  };
}

export const isNecessaryLength = length => (value) => {
  if (!value) {
    return undefined;
  }

  return value.length === length
    ? undefined
    : `Length must be ${length} characters`;
};

export function isNumberInteger(value) {
  if (!value) {
    return undefined;
  }

  if (!/^-?\d+$/.test(value)) {
    return 'Only digits are allowed';
  }

  return Number.isInteger(parseFloat(value))
    ? undefined
    : 'Must be integer';
}

export const isNumberFloat = decimalQuantity => (value) => {
  if (!value) {
    return undefined;
  }

  if (!/^-?\d*(\.\d+)?$/.test(value)) {
    return 'Only digits and dot are allowed';
  }

  const integerPart = value.split('.')[0];

  const decimalPart = value.split('.')[1];

  if (!integerPart) {
    return 'Must start with digit';
  }

  if (decimalPart && decimalPart.length > decimalQuantity) {
    return `Must contain only ${decimalQuantity} decimal number`;
  }

  return undefined;
};

export function isNumberPositive(value) {
  if (!value) {
    return undefined;
  }

  const parsed = parseFloat(value);

  if (parsed <= 0) {
    return 'Must be positive';
  }

  return undefined;
}

export const isMaxNumberValue = maxSizeNumber => (value) => {
  if (!value) {
    return undefined;
  }

  const parsed = parseFloat(value);

  if (parsed > maxSizeNumber) {
    return `Number must be less than ${maxSizeNumber}`;
  }

  return undefined;
};

export const isMinNumberValue = minSizeNumber => (value) => {
  if (!value) {
    return undefined;
  }

  const parsed = parseFloat(value);

  if (parsed < minSizeNumber) {
    return `Number must be more than ${minSizeNumber}`;
  }

  return undefined;
};

export function isRequiredArray(value) {
  return value && value.length
    ? undefined
    : 'Must have at least one item';
}

export function isOnlyDigits(value) {
  if (!value) {
    return undefined;
  }

  return /^\d*[0-9]\d*$/.test(value)
    ? undefined
    : 'Must contain only digits';
}

export function isOnlyDigitsNotRequired(value) {
  if (!value) {
    return undefined;
  }

  return /^\d*[0-9]\d*$/.test(value)
    ? undefined
    : 'Must contain only digits';
}

export function isWhitelistedChars(value) {
  if (!value) {
    return undefined;
  }

  return /^[A-z0-9!#$%&'+\-/=?^_`{|}~.,\s]*$/.test(value)
    ? undefined
    : 'You have used forbidden characters';
}

export function isAlphanumericAndSpace(value) {
  if (!value) {
    return undefined;
  }

  return /^[A-z0-9\s]*$/.test(value)
    ? undefined
    : 'Only alphanumeric characters or space are allowed';
}

export function isNoStartSpace(value) {
  if (!value) {
    return undefined;
  }

  return /^\s/.test(value)
    ? 'Should not start with space'
    : undefined;
}

export function isNoEndSpace(value) {
  if (!value) {
    return undefined;
  }

  return /\s$/.test(value)
    ? 'Should not end with space'
    : undefined;
}

export function isNoSuccessiveSpaces(value) {
  if (!value) {
    return undefined;
  }

  return /\s\s/.test(value)
    ? 'Two successive spaces are not allowed'
    : undefined;
}

export const isValidFileSize = validSize => (value) => {
  if (!value) {
    return undefined;
  }

  const { size } = value;

  return (!size || convertBytesToMB(size) < validSize)
    ? undefined
    : `File size should be less than ${validSize}MB`;

  function convertBytesToMB(bytes) {
    return bytes / (1024 ** 2);
  }
};
