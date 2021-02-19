import { Validator } from './validation';

describe('Validator', () => {
  it('returns an error message on falsy input', () => {
    expect(Validator.notEmpty('')).toBeTruthy();
  });
  it('returns an error message when wrong date format', () => {
    expect(Validator.isDate(Date.now())).toBeTruthy();
  });
  it('returns no error message on correct date format', () => {
    expect(Validator.isDate('1991/08/13')).toBeFalsy();
  });
  it('returns an error message future date', () => {
    expect(Validator.isNotFutureDate('2849/01/01')).toBeTruthy();
  });
});
