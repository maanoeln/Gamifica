import { PropTypes } from 'prop-types';
import React, { useEffect, useState } from 'react';
import HeroesComponent from '../components/HeroesComponent';
import { useFave } from '../context/FavesProvider';
import api from '../services/api';

const sortData = (sort) => (characterOne, characterTwo) => {
  const name1 = characterOne.name;
  const name2 = characterTwo.name;
  return sort && name1.localeCompare(name2);
};

const filterAndSortProducts = ({ data, search, sort, faves, showFave }) =>
  data
    .filter((d) => {
      const productName = d.name.toLowerCase();
      return productName.indexOf(search.toLowerCase()) > -1;
    })
    .filter((d) => (showFave ? faves.includes(d.id) : d))
    .sort(sortData(sort));

const handleCharacterInfoPage = (history) => (id) => () => {
  history.push(`/character/${id}`);
};

const HeroesContainer = ({ history }) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(false);
  const [showFave, setShowFave] = useState(false);
  const { faves, setFaves } = useFave();

  useEffect(() => {
    api
      .get('/characters')
      .then((response) => setData(response.data.data.results))
      .catch((error) => console.log(error));
  }, []);

  if (faves.length) {
    localStorage.setItem('faves', JSON.stringify(faves));
  }

  const persistedFaves = JSON.parse(localStorage.getItem('faves'));

  useEffect(() => {
    setFaves(persistedFaves ? persistedFaves : []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setFaves]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <HeroesComponent
      data={filterAndSortProducts({ data, search, sort, faves, showFave })}
      showFave={showFave}
      handleChange={(e) => handleChange(e)}
      value={search}
      setShowFave={() => setShowFave((state) => !state)}
      sortData={() => setSort((state) => !state)}
      sort={sort}
      handleCharacterInfoPage={handleCharacterInfoPage(history)}
    />
  );
};

HeroesContainer.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

export default HeroesContainer;
