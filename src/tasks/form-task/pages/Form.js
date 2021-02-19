import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Legend from '../components/Legend';
import FormField from '../containers/FormField';
import { saveUserForm } from '../utils/form-api';
import { Validator } from '../utils/validation';
import { statusOptions, fieldCaptions } from '../utils/content';

const Form = () => {
  /**
   * Separate state fields are easier to maintain and manage
   */
  const [firstName, setFirstName] = useState({ value: '', error: '', touched: false });
  const [lastName, setLastName] = useState({ value: '', error: '', touched: false });
  const [birthDay, setBirthDay] = useState({ value: '', error: '', touched: false });
  const [userStatus, setUserStatus] = useState({ value: 'active', error: '', touched: true });
  const [deactivationDate, setDeactivationDate] = useState({ value: '', error: '', touched: false });

  /**
   * Validator configuration for form fields
   */
  const formValidationConfig = {
    firstName: {
      name: 'firstName', data: firstName, dataSetter: setFirstName, rules: ['notEmpty'], default: '',
    },
    lastName: {
      name: 'lastName', data: lastName, dataSetter: setLastName, rules: ['notEmpty'], default: '',
    },
    birthDay: {
      name: 'birthDay', data: birthDay, dataSetter: setBirthDay, rules: ['notEmpty', 'isDate'], default: '',
    },
    userStatus: {
      name: 'userStatus', data: userStatus, dataSetter: setUserStatus, rules: ['notEmpty'], default: 'active',
    },
    deactivationDate: {
      name: 'deactivationDate', data: deactivationDate, dataSetter: setDeactivationDate, rules: ['isDate', 'isNotFutureDate'], default: '',
    },
  };

  /**
   * Check currently active form fields according to validation rules
   *
   * @param {Array} validatorArray currently active form fields
   * @returns {Boolean} are there any invalid fields
   */
  const validateForm = (validatorArray) => {
    validatorArray.forEach((el) => {
      el.dataSetter((prevState) => (
        {
          ...prevState,
          error: Validator.validate(prevState.value, el.rules),
        }
      ));
    });

    return validatorArray.some((val) => val.data.error || !val.data.touched);
  };

  /**
   * Process form data when button is clicked or on Enter/Return key
   *
   * @param {Object} event SubmitEvent
   */
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    let validatorArray;

    if (userStatus.value === 'active') validatorArray = Object.values(formValidationConfig).filter((el) => el.name !== 'deactivationDate');
    else validatorArray = Object.values(formValidationConfig);

    const formErrors = validateForm(validatorArray);

    if (!formErrors) {
      await saveUserForm();
      validatorArray.forEach(
        (el) => el.dataSetter(
          (prevState) => ({ ...prevState, value: el.default, touched: false }),
        ),
      );
    }
  };

  /**
   * Handling field exit validation
   *
   * @param {Object} event
   * @param {Array} rules Selected rules to be validated against
   * @param {Function} updateState State change function
   */
  const onChangeHandler = (event, rules, updateState) => {
    const e = event.target.value;
    updateState((prevState) => (
      {
        ...prevState,
        value: e,
        error: Validator.validate(e, rules),
        touched: true,
      }));
  };

  return (
    <Wrapper>
      <form id="userForm" onSubmit={onSubmitHandler}>
        <StyledFieldset>
          <Legend>Personal info</Legend>
          <FormField
            caption={firstName.error || fieldCaptions.firstName}
            displayName="First name"
            error={firstName.error}
            name="firstName"
            onChange={(e) => onChangeHandler(e, formValidationConfig.firstName.rules, setFirstName)}
            type="text"
            value={firstName.value}
          />
          <FormField
            type="text"
            caption={lastName.error || fieldCaptions.lastName}
            displayName="Last name"
            error={lastName.error}
            name="lastName"
            onChange={(e) => onChangeHandler(e, formValidationConfig.lastName.rules, setLastName)}
            value={lastName.value}
          />
          <FormField
            caption={birthDay.error || fieldCaptions.birthDay}
            displayName="Date of birth"
            error={birthDay.error}
            name="birthDate"
            onChange={(e) => onChangeHandler(e, formValidationConfig.birthDay.rules, setBirthDay)}
            type="text"
            value={birthDay.value}
          />
        </StyledFieldset>
        <StyledFieldset>
          <Legend>User management</Legend>
          <FormField
            caption={userStatus.error || fieldCaptions.userStatus}
            displayName="User status"
            error={userStatus.error}
            name="userStatus"
            onChange={(e) => { setDeactivationDate({ value: '', error: false }); onChangeHandler(e, formValidationConfig.userStatus.rules, setUserStatus); }}
            options={statusOptions}
            type="select"
            value={userStatus.value}
          />
          <FormField
            caption={deactivationDate.error || fieldCaptions.deactivationDate}
            disabled={userStatus.value === 'active'}
            displayName="Deactivation date"
            error={deactivationDate.error}
            name="deactivationDate"
            onChange={(e) => onChangeHandler(e, formValidationConfig.deactivationDate.rules, setDeactivationDate)}
            type="text"
            value={deactivationDate.value}
          />
        </StyledFieldset>
      </form>
      <Button type="submit" form="userForm" />
    </Wrapper>
  );
};

const StyledFieldset = styled.fieldset`
  border: none;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;
`;

export default Form;
