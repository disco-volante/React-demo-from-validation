export const dateFormat = 'yyyy/mm/dd';

export const statusOptions = [
  { key: 'active', display: 'Active' },
  { key: 'inactive', display: 'Inactive' }
];

export const fieldCaptions = {
  firstName: 'Your first name',
  lastName: 'Your surname',
  birthDay: `Your date of birth in ${dateFormat} format`,
  userStatus: 'Select user status',
  deactivationDate: `Date of user deactivation in ${dateFormat} format`,
};

export const errorMessages = {
  notEmpty: 'Field should not be empty',
  isDate: `Date should be formatted as ${dateFormat}`,
  isNotFutureDate: 'Future date is not allowed',
};
