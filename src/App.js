import React from 'react';
import { Router } from 'react-router-dom';
import TopHeaderComponent from './components/TopHeaderComponent';
import { FaveProvider } from './context/FavesProvider';
import { GlobalStyle } from './global/globalStyled';
import history from './routes/history';
import Routes from './routes/routes';

const App = () => {
  return (
    <FaveProvider>
      <Router history={history}>
        <GlobalStyle />
        <TopHeaderComponent />
        <Routes />
      </Router>
    </FaveProvider>
  );
};

export default App;
