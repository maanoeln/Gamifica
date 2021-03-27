import { act, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MockAdapter from 'axios-mock-adapter';
import HeroesContainer from '../containers/HeroesContainer';
import HeroesInfoContainer from '../containers/HeroesInfoContainer';
import api from '../services/api';
import renderComponent from '../__mocks__/renderWithProvider';

let apiMock;

const characterId = 1;
const title = `Gamifica`;
const baseUrl = `/characters/${characterId}`;
const comicUrl = `/characters/${characterId}/comics`;

const data = {
  data: {
    results: [
      {
        id: 1,
        name: `3-D Man`,
        description: `This is a description`,
        thumbnail: { exstension: `jpeg`, path: `www.image.com` },
      },
    ],
  },
};

const emptyDescription = {
  data: {
    results: [
      {
        id: 1,
        name: `3-D Man`,
        description: ``,
        thumbnail: { exstension: `jpeg`, path: `www.image.com` },
      },
    ],
  },
};

const comicData = {
  data: {
    results: [
      {
        id: 1,
        title: `Title 1`,
        dates: [{ type: `onsaleDate`, date: `2008-12-17T00:00:00-0500` }],
      },
      {
        id: 1,
        title: `Title 2`,
        dates: [{ type: `onsaleDate`, date: `2015-12-17T00:00:00-0500` }],
      },
      {
        id: 1,
        title: `Title 3`,
        dates: [{ type: `onsaleDate`, date: `2016-12-17T00:00:00-0500` }],
      },
    ],
  },
};

const emptyComics = {
  data: {
    results: [],
  },
};

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
    renderComponent(HeroesInfoContainer, {
      match: { params: 1 },
    });

    await waitFor(() => expect(apiMock.history.get.length).toBe(0));
    await waitFor(() =>
      expect(getByText(`Erro ao buscar os dados`)).toBeInTheDocument(),
    );
  });

  test(`Should request saved data`, async () => {
    apiMock
      .onGet(baseUrl)
      .reply(200, data)
      .onGet(comicUrl)
      .reply(200, comicData);

    const { getByText } = screen;
    await act(async () => {
      await renderComponent(HeroesInfoContainer, {
        match: { params: { id: characterId } },
      });
    });

    expect(getByText(title)).toBeInTheDocument();

    await waitFor(() => expect(apiMock.history.get.length).toBe(2));
    expect(apiMock.history.get[0].url).toBe(baseUrl);
    expect(apiMock.history.get[1].url).toBe(comicUrl);
  });

  test(`Should show info`, async () => {
    apiMock
      .onGet(baseUrl)
      .reply(200, data)
      .onGet(comicUrl)
      .reply(200, comicData);

    const { getByText } = screen;
    await act(async () => {
      await renderComponent(HeroesInfoContainer, {
        match: { params: { id: characterId } },
      });
    });

    const titleToClick = getByText(title);
    expect(titleToClick).toBeInTheDocument();

    expect(getByText(`Nome`)).toBeInTheDocument();
    expect(getByText(`3-D Man`)).toBeInTheDocument();
    expect(getByText(`Descrição`)).toBeInTheDocument();
    expect(getByText(`This is a description`)).toBeInTheDocument();
    expect(getByText(`Últimos quadrinhos`)).toBeInTheDocument();
    expect(getByText(`Title 1`)).toBeInTheDocument();
    expect(getByText(`Title 2`)).toBeInTheDocument();
    expect(getByText(`Title 3`)).toBeInTheDocument();

    userEvent.click(titleToClick);
  });

  test(`When there are not any comics and no description should show message`, async () => {
    apiMock
      .onGet(baseUrl)
      .reply(200, emptyDescription)
      .onGet(comicUrl)
      .reply(200, emptyComics);

    const { getByText } = screen;
    await act(async () => {
      await renderComponent(HeroesInfoContainer, {
        match: { params: { id: characterId } },
      });
    });

    const backButton = getByText(title);

    expect(getByText(`Nome`)).toBeInTheDocument();
    expect(getByText(`3-D Man`)).toBeInTheDocument();
    expect(getByText(`Descrição`)).toBeInTheDocument();
    expect(
      getByText(`Não há descrição para esse personagem`),
    ).toBeInTheDocument();
    expect(getByText(`Últimos quadrinhos`)).toBeInTheDocument();
    expect(
      getByText(`Não há quadrinhos para esse personagem`),
    ).toBeInTheDocument();

    userEvent.click(backButton);
  });

  test.skip(`Shoul change page forward`, async () => {
    apiMock.onGet(baseUrl).reply(200, data);

    const { getByText, findByText } = screen;
    await act(async () => {
      await renderComponent(HeroesContainer, {
        match: { params: null },
      });
    });

    const page = getByText(`>`);
    expect(page).toBeInTheDocument();

    await waitFor(() => expect(apiMock.history.get.length).toBe(1));
    expect(apiMock.history.get[0].url).toBe(baseUrl);

    expect(await findByText(`3-D Man`)).toBeInTheDocument();
    expect(getByText(`Amun`)).toBeInTheDocument();
    expect(getByText(`Ancient One`)).toBeInTheDocument();

    userEvent.click(page);

    await waitFor(() => apiMock.onGet(baseUrl).reply(200, data));
    await waitFor(() => expect(apiMock.history.get.length).toBe(2));
    expect(apiMock.history.get[1].url).toBe(baseUrl);
  });

  test.skip(`Shoul click on page number and then go back`, async () => {
    apiMock.onGet(baseUrl).reply(200, data);

    const { getByText, findByText } = screen;
    await act(async () => {
      await renderComponent(HeroesContainer, {
        match: { params: null },
      });
    });

    const page = getByText(`<`);
    const page2 = getByText(`2`);
    expect(page).toBeInTheDocument();
    expect(page2).toBeInTheDocument();

    await waitFor(() => expect(apiMock.history.get.length).toBe(1));
    expect(apiMock.history.get[0].url).toBe(baseUrl);

    expect(await findByText(`3-D Man`)).toBeInTheDocument();
    expect(getByText(`Amun`)).toBeInTheDocument();
    expect(getByText(`Ancient One`)).toBeInTheDocument();

    userEvent.click(page2);

    await waitFor(() => expect(apiMock.history.get.length).toBe(2));
    expect(apiMock.history.get[1].url).toBe(baseUrl);

    expect(await findByText(`Adam Destine`)).toBeInTheDocument();
    expect(getByText(`Adam Warlock`)).toBeInTheDocument();

    userEvent.click(page);

    await waitFor(() => expect(apiMock.history.get.length).toBe(3));
    expect(apiMock.history.get[2].url).toBe(baseUrl);

    expect(await findByText(`3-D Man`)).toBeInTheDocument();
    expect(getByText(`Amun`)).toBeInTheDocument();
    expect(getByText(`Ancient One`)).toBeInTheDocument();
  });

  test.skip(`Should get favorites in localStorage`, async () => {
    localStorage.setItem = jest.fn(() => `faves`, `[1, 2, 3, 4, 5]`);

    apiMock.onGet(baseUrl).reply(200, data);

    const { getByText, queryByText, getByTestId } = screen;
    await act(async () => {
      await renderComponent(HeroesContainer, {
        match: { params: null },
      });
    });

    localStorage.getItem = jest.fn(() => `faves`);

    const faves = getByTestId(`getFaves`);
    expect(faves).toBeInTheDocument();

    expect(getByText(`3-D Man`)).toBeInTheDocument();
    expect(getByText(`A-Bomb`)).toBeInTheDocument();
    expect(getByText(`A.I.M`)).toBeInTheDocument();
    expect(getByText(`Aaron Stack`)).toBeInTheDocument();
    expect(getByText(`Abomination`)).toBeInTheDocument();

    expect(queryByText(`Abomination Ultimate`)).toBeInTheDocument();
  });

  test.skip(`When click on character should push to his page`, async () => {
    apiMock.onGet(baseUrl).reply(200, data);

    const { getByText } = screen;
    await act(async () => {
      await renderComponent(HeroesContainer, {
        match: { params: null },
      });
    });

    const character = getByText(`A-Bomb`);
    expect(character).toBeInTheDocument();

    userEvent.click(character);
  });

  test.skip(`Should set character as fave`, async () => {
    apiMock.onGet(baseUrl).reply(200, data);

    const { findByTestId } = screen;
    await act(async () => {
      await renderComponent(HeroesContainer, {
        match: { params: null },
      });
    });

    const fave = await findByTestId(`fave1`);
    expect(fave).toBeInTheDocument();

    userEvent.click(fave);

    const unfave = await findByTestId(`unfave1`);
    expect(unfave).toBeInTheDocument();
  });
});
