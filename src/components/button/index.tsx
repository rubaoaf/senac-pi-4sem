import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  type?: 'button' | 'reset' | 'submit';
  children?: React.ReactNode;
  color?: string;
  onClick?: () => void;
}

const StyledButton = styled('button')<ButtonProps>`
  padding: 12px 42px 11px 42px;
  background-color: ${(props: ButtonProps) => props.color || '#96982E'};
  color: #fff;
  font: bold 14px/17px 'MontSerrat';
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  margin-left: 10px;
  border: none;
`;

const Button: React.FC<ButtonProps> = ({ type, children, ...props }) => {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
