import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import HeroesContainer from '../containers/HeroesContainer';
import api from '../services/api';
import { data } from '../__mocks__/data';
import renderComponent from '../__mocks__/renderWithProvider';

let apiMock;
const history = { push: jest.fn(), goBack: jest.fn() };

const title = 'Gamifica';
const placeholder = 'Digite o nome do super-herói';
const baseUrl = '/characters';

describe('HeroesContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
    apiMock.resetHistory();
  });

  beforeAll(() => {
    apiMock = new MockAdapter(api);
  });

  test('When occur error in get shoul show message', async () => {
    apiMock.onGet(baseUrl).reply(400);

    const { getByText } = screen;
    renderComponent(HeroesContainer, {
      match: { params: null },
    });

    await waitFor(() => expect(apiMock.history.get.length).toBe(0));
    await waitFor(() =>
      expect(getByText('Erro ao buscar os dados')).toBeInTheDocument()
    );
  });

  test('Should request saved data', async () => {
    apiMock.onGet(baseUrl).reply(200, data);

    const { getByText, getByPlaceholderText } = screen;
    await act(async () => {
      await renderComponent(HeroesContainer, {
        match: { params: null },
      });
    });

    expect(getByText(title)).toBeInTheDocument();
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();

    await waitFor(() => expect(apiMock.history.get.length).toBe(1));
    expect(apiMock.history.get[0].url).toBe(baseUrl);
  });

  test('Should call history push when click on title', async () => {
    apiMock.onGet(baseUrl).reply(200, data);

    const { getByText, getByPlaceholderText } = screen;
    await act(async () => {
      await renderComponent(HeroesContainer, {
        match: { params: null },
      });
    });

    const titleToClick = getByText(title);
    expect(titleToClick).toBeInTheDocument();
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();

    userEvent.click(titleToClick);
  });

  test('Should show data in screen and be able to search for specific', async () => {
    apiMock.onGet(baseUrl).reply(200, data);

    const { getByText, getByPlaceholderText, findByText, queryByText } = screen;
    await act(async () => {
      await renderComponent(HeroesContainer, {
        match: { params: null },
      });
    });

    const titleToClick = getByText(title);
    const input = getByPlaceholderText('Digite o nome do super-herói');
    expect(titleToClick).toBeInTheDocument();
    expect(getByPlaceholderText(placeholder)).toBeInTheDocument();

    await waitFor(() => expect(apiMock.history.get.length).toBe(1));
    expect(apiMock.history.get[0].url).toBe(baseUrl);

    expect(await findByText('3-D Man')).toBeInTheDocument();
    expect(getByText('A-Bomb')).toBeInTheDocument();
    expect(getByText('A.I.M')).toBeInTheDocument();

    userEvent.type(input, '3-D Man');
    expect(await findByText('3-D Man')).toBeInTheDocument();
    expect(queryByText('A-Bomb')).toBeNull();
  });

  test('Shoul sort data by name', async () => {
    apiMock.onGet(baseUrl).reply(200, data);

    const { getByText, getByTestId, findByText, queryByText } = screen;
    await act(async () => {
      await renderComponent(HeroesContainer, {
        match: { params: null },
      });
    });

    const sortData = getByTestId('sortData');
    expect(sortData).toBeInTheDocument();

    await waitFor(() => expect(apiMock.history.get.length).toBe(1));
    expect(apiMock.history.get[0].url).toBe(baseUrl);

    expect(await findByText('3-D Man')).toBeInTheDocument();
    expect(getByText('Amun')).toBeInTheDocument();
    expect(getByText('Ancient One')).toBeInTheDocument();

    userEvent.click(sortData);
    expect(await findByText('Adam Destine')).toBeInTheDocument();
    expect(queryByText('Adam Warlock')).toBeInTheDocument();
  });

  test('Shoul change page forward', async () => {
    apiMock.onGet(baseUrl).reply(200, data);

    const { getByText, findByText } = screen;
    await act(async () => {
      await renderComponent(HeroesContainer, {
        match: { params: null },
      });
    });

    const page = getByText('>');
    expect(page).toBeInTheDocument();

    await waitFor(() => expect(apiMock.history.get.length).toBe(1));
    expect(apiMock.history.get[0].url).toBe(baseUrl);

    expect(await findByText('3-D Man')).toBeInTheDocument();
    expect(getByText('Amun')).toBeInTheDocument();
    expect(getByText('Ancient One')).toBeInTheDocument();

    userEvent.click(page);

    await waitFor(() => apiMock.onGet(baseUrl).reply(200, data));
    await waitFor(() => expect(apiMock.history.get.length).toBe(2));
    expect(apiMock.history.get[1].url).toBe(baseUrl);
  });

  test('Shoul click on page number and then go back', async () => {
    apiMock.onGet(baseUrl).reply(200, data);

    const { getByText, findByText } = screen;
    await act(async () => {
      await renderComponent(HeroesContainer, {
        match: { params: null },
      });
    });

    const page = getByText('<');
    const page2 = getByText('2');
    expect(page).toBeInTheDocument();
    expect(page2).toBeInTheDocument();

    await waitFor(() => expect(apiMock.history.get.length).toBe(1));
    expect(apiMock.history.get[0].url).toBe(baseUrl);

    expect(await findByText('3-D Man')).toBeInTheDocument();
    expect(getByText('Amun')).toBeInTheDocument();
    expect(getByText('Ancient One')).toBeInTheDocument();

    userEvent.click(page2);

    await waitFor(() => expect(apiMock.history.get.length).toBe(2));
    expect(apiMock.history.get[1].url).toBe(baseUrl);

    expect(await findByText('Adam Destine')).toBeInTheDocument();
    expect(getByText('Adam Warlock')).toBeInTheDocument();

    userEvent.click(page);

    await waitFor(() => expect(apiMock.history.get.length).toBe(3));
    expect(apiMock.history.get[2].url).toBe(baseUrl);

    expect(await findByText('3-D Man')).toBeInTheDocument();
    expect(getByText('Amun')).toBeInTheDocument();
    expect(getByText('Ancient One')).toBeInTheDocument();
  });

  test('Should get favorites in localStorage', async () => {
    localStorage.setItem = jest.fn(() => 'faves', '[1, 2, 3, 4, 5]');

    apiMock.onGet(baseUrl).reply(200, data);

    const { getByText, queryByText, getByTestId } = screen;
    await act(async () => {
      await renderComponent(HeroesContainer, {
        match: { params: null },
      });
    });

    localStorage.getItem = jest.fn(() => 'faves');

    const faves = getByTestId('getFaves');
    expect(faves).toBeInTheDocument();

    expect(getByText('3-D Man')).toBeInTheDocument();
    expect(getByText('A-Bomb')).toBeInTheDocument();
    expect(getByText('A.I.M')).toBeInTheDocument();
    expect(getByText('Aaron Stack')).toBeInTheDocument();
    expect(getByText('Abomination')).toBeInTheDocument();

    expect(queryByText('Abomination Ultimate')).toBeInTheDocument();
  });

  test('When click on character should push to his page', async () => {
    apiMock.onGet(baseUrl).reply(200, data);

    const { getByText } = screen;
    await act(async () => {
      await renderComponent(HeroesContainer, {
        match: { params: null },
      });
    });

    const character = getByText('A-Bomb');
    expect(character).toBeInTheDocument();

    userEvent.click(character);
  });

  test('Should set character as fave', async () => {
    apiMock.onGet(baseUrl).reply(200, data);

    const { findByTestId } = screen;
    await act(async () => {
      await renderComponent(HeroesContainer, {
        match: { params: null },
      });
    });

    const fave = await findByTestId('fave1');
    expect(fave).toBeInTheDocument();

    userEvent.click(fave);

    const unfave = await findByTestId('unfave1');
    expect(unfave).toBeInTheDocument();
  });
});
