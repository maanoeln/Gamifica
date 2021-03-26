import React from 'react';
import SearchBarComponent from './components/SearchBarComponent';
import TopHeaderComponent from './components/TopHeaderComponent';
import HeroesContainer from './containers/HeroesContainer';
import { AppContainer, GlobalStyle } from './global/globalStyled';

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <TopHeaderComponent />
      <SearchBarComponent />
      <HeroesContainer />
    </AppContainer>
  );
};

export default App;
