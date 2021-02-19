/* eslint-disable func-names */
import { dateFormat } from './content';

// Not using any form of sophisticated leap year check
const dateRegExp = new RegExp('[0-9]{4}/((1[0-2])|(0[1-9]))/(([0-2][0-9])|(3[0-1]))');

export const Validator = function () {};

Validator.validate = function (value, validators) {
  const self = this;
  let errorMessage = '';
  validators.some((val) => {
    const err = self[val](value);
    if (err) {
      errorMessage = err;
    }
    return err;
  });
  return errorMessage;
};

Validator.notEmpty = (value) => {
  if (value !== '' && value !== null && typeof value !== 'undefined') {
    return '';
  }
  return 'Field must not be empty';
};

Validator.isDate = (value) => {
  if (dateRegExp.test(value)) {
    return '';
  }
  return `Date should be formatted as ${dateFormat}`;
};

Validator.isNotFutureDate = (value) => {
  const valueDate = Date.parse(new Date(value));
  const dateNow = new Date();
  if (valueDate <= dateNow) {
    return '';
  }
  return 'Future date is not allowed';
};
