import React from 'react';
import styled from 'styled-components';

const Input = ({
  disabled,
  name,
  onBlur,
  onChange,
  value,
  type,
}) => (
  <StyledInput
    disabled={disabled}
    name={name}
    onBlur={onBlur}
    onChange={onChange}
    type={type}
    value={value}
  />
);

const StyledInput = styled.input`
    border-radius: 5px;
    border-width: 1px;
    box-sizing: content-box;
    font-family: 'Roboto', sans-serif;
    height: 24px;
    width: 250px;
    outline: none;
    padding: 0 10px;

    :focus {
      box-shadow: 0 0 5px 2px rgba(128, 128, 255, 0.5)
    }
`;

export default Input;
