import React from 'react';
import styled from 'styled-components';

const Label = ({ children, disabled, name }) => (
  <StyledLabel htmlFor={name} disabled={disabled}>{children}</StyledLabel>);

const StyledLabel = styled.label`
  color: ${(props) => (props.disabled ? '#666' : 'inherit')};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1em;
  padding: 5px;
`;

export default Label;
