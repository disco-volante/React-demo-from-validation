import React from 'react';
import styled from 'styled-components';

import Input from '../components/Input';
import Label from '../components/Label';
import Caption from '../components/Caption';
import Select from '../components/Select';

const FormField = ({
  caption,
  disabled,
  displayName,
  error,
  name,
  onBlur,
  onChange,
  options,
  type,
  value,
}) => (
  <Wrapper>
    <Label name={name} disabled={disabled}>{displayName}</Label>
    {type === 'select' ? (
      <Select
        disabled={disabled}
        name={name}
        onChange={onChange}
        options={options}
        value={value}
      />
    ) : (
      <Input
        disabled={disabled}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        type={type}
        value={value}
      />
    )}
    {disabled ? null : <Caption error={error}>{caption}</Caption>}
  </Wrapper>
);

const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: column nowrap;
  padding:  0 10px 10px 10px;
`;

export default FormField;
