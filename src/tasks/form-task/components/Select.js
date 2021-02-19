import React from 'react';
import styled from 'styled-components';

const Select = (props) => {
  const {
    disabled,
    name,
    onChange,
    options,
    type,
    value,
  } = props;
  return (
    <StyledSelect
      disabled={disabled}
      name={name}
      onChange={onChange}
      type={type}
      value={value}
    >
      {
      options.map((el) => (<option key={el.key} value={el.key}>{el.display}</option>))
    }
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
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

export default Select;
