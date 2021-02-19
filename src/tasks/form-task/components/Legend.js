import React from 'react';
import styled from 'styled-components';

const Legend = ({ children }) => (
  <StyledLegend>{children}</StyledLegend>);

const StyledLegend = styled.legend`
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 1.2em;
    padding: 5px;
`;

export default Legend;
