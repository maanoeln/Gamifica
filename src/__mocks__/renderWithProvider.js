import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import TopHeaderContainer from '../containers/TopHeaderContainer';
import { FaveProvider } from '../context/FavesProvider';

const renderComponent = (
  WrappedComponent,
  {
    match = { params: {} },
    history = { goBack: jest.fn(), push: jest.fn() },
    ...props
  },
  fn = render,
) =>
  fn(
    <FaveProvider>
      <BrowserRouter>
        <MemoryRouter>
          <TopHeaderContainer />
          <WrappedComponent history={history} match={match} {...props} />
          <ToastContainer style={{ zIndex: 999, opacity: 1 }} />
        </MemoryRouter>
      </BrowserRouter>
    </FaveProvider>,
  );

export const renderAppComponent = (
  WrappedComponent,
  {
    match = { params: {} },
    history = { goBack: jest.fn(), push: jest.fn() },
    ...props
  },
  fn = render,
) =>
  fn(
    <FaveProvider>
      <BrowserRouter>
        <MemoryRouter>
          <WrappedComponent history={history} match={match} {...props} />
          <ToastContainer style={{ zIndex: 999, opacity: 1 }} />
        </MemoryRouter>
      </BrowserRouter>
    </FaveProvider>,
  );

export default renderComponent;
