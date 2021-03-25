import React from 'react';
import HeroesComponent from './components/HeroesComponent';
import SearchBarComponent from './components/SearchBarComponent';
import TopHeaderComponent from './components/TopHeaderComponent';
import { AppContainer, GlobalStyle } from './global/globalStyled';

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <TopHeaderComponent />
      <SearchBarComponent />
      <HeroesComponent />
    </AppContainer>
  );
};

export default App;
