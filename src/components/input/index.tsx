import React, { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Label = styled.label`
  width: 100%;
`;

const StyledInput = styled.input`
  border: 1px solid #d3d426;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.2);
  width: 100%;
  max-height: 40px;
  padding: 14px 12px 10px;
  box-sizing: border-box;
  margin-bottom: 20px;
  font-family: 'Montserrat';
  font-size: 14px;
  font-weight: 300;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  return (
    <Label htmlFor={name}>
      <StyledInput name={name} onChange={() => console.log('onChange')} id={name} {...rest} />
    </Label>
  );
};

export default Input;
