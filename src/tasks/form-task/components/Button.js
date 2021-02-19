import React from 'react';
import styled from 'styled-components';

const Button = ({ form, type, onClick }) => (
  <StyledButton
    form={form}
    onClick={onClick}
    type={type}
  >
    Save
  </StyledButton>
);

const StyledButton = styled.button`
    background-color: #00F;
    border: none;
    border-radius: 5px;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    height: 40px;
    outline: none;
    margin: 10px;
    width: 280px;

    :hover {
      background-color: #00E;
    }

    :active {
      transform: scale(0.95);
      background-color: #00D;
    }
`;

export default Button;
