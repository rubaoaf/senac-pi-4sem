import React from 'react';
import styled from '@emotion/styled';

interface IStyledButton {
  children?: React.ReactNode;
  primary?: boolean;
}

const StyledButton = styled('a')<IStyledButton>`
  padding: 12px 42px 11px 42px;
  background-color: ${(props: IStyledButton) => (props.primary ? '#2f5814' : '#48D1CC')};
  color: #fff;
  font: bold 14px/17px 'MontSerrat';
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  margin-left: 10px;
`;

const Button: React.FC<HTMLButtonElement> = (props) => {
  console.log(props);
  return <StyledButton href="#">Cadastrar</StyledButton>;
};

export default Button;
