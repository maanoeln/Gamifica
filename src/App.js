import React from 'react';
import TopHeaderComponent from './components/TopHeaderComponent';
import HeroesContainer from './containers/HeroesContainer';
import { AppContainer, GlobalStyle } from './global/globalStyled';

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <TopHeaderComponent />

      <HeroesContainer />
    </AppContainer>
  );
};

export default App;
