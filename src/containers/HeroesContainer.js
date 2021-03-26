import React, { useEffect, useState } from 'react';
import HeroesComponent from '../components/HeroesComponent';
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

const handleFaves = ({ faves, setFaves }) => (id) => () => {
  if (faves.includes(id)) {
    const newFaves = faves.filter((f) => f !== id);
    return setFaves(newFaves);
  }

  if (faves.length === 5) {
    return alert('Voce nao pode adicionar mais favoritos');
  }

  return setFaves((state) => [...state, id]);
};

const isFave = (faves) => (id) => () => (faves.includes(id) ? true : false);

const HeroesContainer = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(false);
  const [faves, setFaves] = useState([]);
  const [showFave, setShowFave] = useState(false);

  useEffect(() => {
    api
      .get('/characters')
      .then((response) => setData(response.data.data.results))
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <HeroesComponent
      data={filterAndSortProducts({ data, search, sort, faves, showFave })}
      showFave={showFave}
      handleChange={(e) => handleChange(e)}
      handleFaves={handleFaves({ faves, setFaves })}
      isFave={isFave(faves)}
      value={search}
      setShowFave={() => setShowFave((state) => !state)}
      sortData={() => setSort((state) => !state)}
      sort={sort}
    />
  );
};

export default HeroesContainer;
