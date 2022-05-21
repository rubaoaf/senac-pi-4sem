import React from 'react';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src='' className='App-logo' alt='logo' />
      </header>
      <main>
        <h1>O que você precisa?</h1>
        <p>
          Procure entre os melhores pet shops, clinicas veterinárias, casas de
          ração, hotéis, escolinhas e demais serviços para seu pet.
        </p>
        <form>
          <label htmlFor='lookingfor'>
            <input
              type='text'
              name='lookingfor'
              onChange={() => console.log('onChange')}
              id='lookingfor'
              placeholder='Estou procurando'
            />
          </label>
          <label htmlFor='wherefind'>
            <input
              type='text'
              name='wherefind'
              onChange={() => console.log('onChange')}
              id='wherefind'
              placeholder='Cidade ou CEP'
            />
          </label>
          <button type='submit'>Pesquisar</button>
        </form>
      </main>
    </div>
  );
}

export default App;
