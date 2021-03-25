import React from 'react';
import TopHeaderComponent from './components/TopHeaderComponent';
import { AppContainer, GlobalStyle } from './global/globalStyled';

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <TopHeaderComponent />
    </AppContainer>
  );
};

export default App;
