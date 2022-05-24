import React from 'react';
import styled from '@emotion/styled';

import Input from '../../components/input';
import Button from '../../components/button';

import Doguinho from '../../images/imagem_dog.jpg';

const Main = styled.main`
  display: flex;
  padding-right: 50px;
`;

const StyledTitle = styled.h1`
  font-family: 'Montserrat';
  font-size: 40px;
  font-weight: 800;
  line-height: 49px;
  letter-spacing: 0em;
  text-align: left;
  color: #2f5814;
`;
const StyledText = styled.p`
  font-family: 'Montserrat';
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

function Home() {
  return (
    <div className="App">
      <Main>
        <img src={Doguinho} alt="imagem do doguinho" />
        <div>
          <StyledTitle>O que você precisa?</StyledTitle>
          <StyledText>
            Procure entre os melhores pet shops, clinicas veterinárias, casas de ração, hotéis,
            escolinhas e demais serviços para seu pet.
          </StyledText>
          <form>
            <Input type="text" name="lookingfor" placeholder="Estou procurando" />
            <FormContainer>
              <Input type="text" name="wherefind" placeholder="Cidade ou CEP" />
              <Button type="submit">Pesquisar</Button>
            </FormContainer>
          </form>
        </div>
      </Main>
    </div>
  );
}

export default Home;
