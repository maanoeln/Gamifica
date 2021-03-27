import { act, screen, waitFor } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import App from '../App';
import api from '../services/api';
import { data } from '../__mocks__/data';
import renderComponent, {
  renderAppComponent,
} from '../__mocks__/renderWithProvider';

let apiMock;

const mockGoBack = jest.fn();
const mockPush = jest.fn();

jest.mock(`react-router`, () => ({
  ...jest.requireActual(`react-router`),
  useHistory: () => ({
    goBack: mockGoBack,
    push: mockPush,
    location: {},
  }),
}));

jest.mock(`react-router-dom`, () => ({
  ...jest.requireActual(`react-router-dom`),
  useHistory: () => ({
    goBack: mockGoBack,
    push: mockPush,
    location: {},
  }),
}));

const title = `Gamifica`;
const placeholder = `Digite o nome do super-herói`;
const baseUrl = `/characters`;

describe(`HeroesContainer`, () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    apiMock.resetHistory();
  });

  beforeAll(() => {
    apiMock = new MockAdapter(api);
  });

  test(`When occur error in get shoul show message`, async () => {
    apiMock.onGet(baseUrl).reply(400);

    const { getByText } = screen;
    renderComponent(App, {
      match: { params: null },
    });

    await waitFor(() => expect(apiMock.history.get.length).toBe(0));
    await waitFor(() =>
      expect(getByText(`Erro ao buscar os dados`)).toBeInTheDocument(),
    );
  });

  test(`Should request saved data`, async () => {
    apiMock.onGet(baseUrl).reply(200, data);

    const { getByText, getByPlaceholderText } = screen;
    await act(async () => {
      await renderAppComponent(App, { match: { params: null } });
    });

    expect(getByText(title)).toBeInTheDocument();
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();

    await waitFor(() => expect(apiMock.history.get.length).toBe(1));
    expect(apiMock.history.get[0].url).toBe(baseUrl);
  });
});
