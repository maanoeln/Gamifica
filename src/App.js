import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopHeaderContainer from './containers/TopHeaderContainer';
import { FaveProvider } from './context/FavesProvider';
import { GlobalStyle } from './global/globalStyled';
import history from './routes/history';
import Routes from './routes/routes';

const App = () => {
  return (
    <FaveProvider>
      <Router history={history}>
        <GlobalStyle />
        <TopHeaderContainer />
        <Routes />
        <ToastContainer style={{ zIndex: 999, opacity: 1 }} />
      </Router>
    </FaveProvider>
  );
};

export default App;
