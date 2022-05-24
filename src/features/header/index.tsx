import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import Button from '../../components/button';
import Logo from './../../images/logo.svg';

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

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledLogo>
        <img src={Logo} className="App-logo" alt="logo" height="100" width="100" />
      </StyledLogo>
      <div>
        <Link to="/login">
          <Button color="#2f5814" type="button">
            Entrar
          </Button>
        </Link>
        <Link to="/cadastrar">
          <Button color="#48D1CC" type="button">
            Cadastrar
          </Button>
        </Link>
      </div>
    </StyledHeader>
  );
};

export default Header;
