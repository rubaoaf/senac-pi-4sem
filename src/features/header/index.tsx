import React from 'react';
import styled from '@emotion/styled';

import Logo from './../../images/logo.svg';

interface IStyledButton {
  primary?: boolean;
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 125px;
  border-bottom: 5px solid #211a0c;
  padding: 25px 50px;
`;

const StyledLogo = styled.a`
  height: 100px;
  width: 100px;
  text-decoration: none;
`;

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

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <img src={Logo} className="App-logo" alt="logo" height="100" width="100" />
      </StyledLogo>
      <div>
        <StyledButton primary href="#">
          Entrar
        </StyledButton>
        <StyledButton href="#">Cadastrar</StyledButton>
      </div>
    </StyledHeader>
  );
};

export default Header;
