import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../../components/input';
import Button from '../../components/button';

const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

const FormPosition = styled.form`
  max-width: 550px;
  position: relative;
  margin-left: calc((550 / 2) * -1px);
  left: 50%;
  margin-top: 140px;
`;

const Fieldset = styled.fieldset`
  font: 800 40px/48px 'Montserrat';
  color: #2f5814;
  border: none;
  padding: 0 0 30px;
`;

const handleClick = () => {
  console.log('clicou');
};

const Login: React.FC = () => {
  return (
    <FormPosition>
      <Fieldset>Entrar</Fieldset>
      <Input type="text" name="email" placeholder="Email" />
      <FormContainer>
        <Input type="password" name="senha" placeholder="Senha" />
        <Link to="/logado">
          <Button type="submit" onClick={handleClick}>
            Entrar
          </Button>
        </Link>
      </FormContainer>
    </FormPosition>
  );
};

export default Login;
