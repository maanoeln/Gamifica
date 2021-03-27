import React, { useEffect, useState } from 'react';
import HeroesInfoComponent from '../components/HeroesInfoComponent';
import api from '../services/api';

const sortData = (d1, d2) => {
  return new Date(d1.onSaleDate) - new Date(d2.onSaleDate);
};

const sortComics = ({ comics }) =>
  comics &&
  comics
    .map((c) => {
      const [onsaleDate] = c.dates.filter((d) => d.type === 'onsaleDate');
      return { id: c.id, title: c.title, onSaleDate: onsaleDate.date };
    })
    .sort(sortData);

const HeroesInfoContainer = ({
  match: {
    params: { id },
  },
}) => {
  const [character, setCharacter] = useState();
  const [comics, setComics] = useState();

  useEffect(() => {
    api
      .get(`/characters/${id}`)
      .then((response) => {
        setCharacter(response.data.data.results[0]);
      })
      .catch((e) => console.log(e));
  }, [id]);

  useEffect(() => {
    if (character) {
      api
        .get(character.comics.collectionURI)
        .then((response) => {
          setComics(response.data.data.results);
        })
        .catch((e) => console.log(e));
    }
  }, [character]);

  return character && comics ? (
    <HeroesInfoComponent
      character={character}
      comics={sortComics({ comics })}
    />
  ) : (
    'Loading...'
  );
};

export default HeroesInfoContainer;
