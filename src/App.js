import React from 'react';
import SearchBarComponent from './components/SearchBarComponent';
import TopHeaderComponent from './components/TopHeaderComponent';
import { AppContainer, GlobalStyle } from './global/globalStyled';

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <TopHeaderComponent />
      <SearchBarComponent />
    </AppContainer>
  );
};

export default App;
