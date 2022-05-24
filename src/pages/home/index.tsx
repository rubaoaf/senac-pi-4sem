import React from 'react';
import styled from '@emotion/styled';

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

const StyledButton = styled.button`
  padding: 12px 42px 11px 42px;
  background-color: #96982e;
  color: #fff;
  font: bold 14px/17px 'MontSerrat';
  text-align: center;
  border-radius: 5px;
  text-decoration: none;
  margin-left: 10px;
  border: none;
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

const FormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
`;

const Label = styled.label`
  width: 100%;
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
            <Label htmlFor="lookingfor">
              <StyledInput
                type="text"
                name="lookingfor"
                onChange={() => console.log('onChange')}
                id="lookingfor"
                placeholder="Estou procurando"
              />
            </Label>
            <FormContainer>
              <Label htmlFor="wherefind">
                <StyledInput
                  type="text"
                  name="wherefind"
                  onChange={() => console.log('onChange')}
                  id="wherefind"
                  placeholder="Cidade ou CEP"
                />
              </Label>
              <StyledButton type="submit">Pesquisar</StyledButton>
            </FormContainer>
          </form>
        </div>
      </Main>
    </div>
  );
}

export default Home;
