import { PropTypes } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import HeroesInfoComponent from '../components/HeroesInfoComponent';
import api from '../services/api';

const sortData = (d1, d2) => new Date(d1.onSaleDate) - new Date(d2.onSaleDate);

const sortComics = ({ comics }) =>
  comics &&
  comics
    .map(c => {
      const [onsaleDate] = c.dates.filter(d => d.type === `onsaleDate`);
      return { id: c.id, title: c.title, onSaleDate: onsaleDate.date };
    })
    .sort(sortData);

const HeroesInfoContainer = ({
  history,
  match: {
    params: { id },
  },
}) => {
  const [character, setCharacter] = useState();
  const [comics, setComics] = useState();

  const handleGoBack = () => history.goBack();

  useEffect(() => {
    api
      .get(`/characters/${id}`)
      .then(response => {
        setCharacter(response.data.data.results[0]);
      })
      .catch(() => toast.error(`Erro ao buscar os dados`));

    api
      .get(`/characters/${id}/comics`)
      .then(response => {
        setComics(response.data.data.results);
      })
      .catch(() => {
        toast.error(`Erro ao buscar os dados`);
      });
  }, [id]);

  return character && comics ? (
    <HeroesInfoComponent
      character={character}
      comics={sortComics({ comics })}
      handleGoBack={handleGoBack}
    />
  ) : (
    `Loading...`
  );
};

HeroesInfoContainer.propTypes = {
  history: PropTypes.shape({ goBack: PropTypes.func.isRequired }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired }),
  }).isRequired,
};

export default HeroesInfoContainer;
