import React from 'react';
import styled from 'styled-components';

const Caption = ({ error, children }) => <StyledCaption error={error}>{children}</StyledCaption>;

const StyledCaption = styled.div`
  color: ${(props) => (props.error ? '#F00' : '#3C3')};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 0.8em;
  padding: 2px;
`;

export default Caption;
