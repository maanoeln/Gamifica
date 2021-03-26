import React, { useEffect, useState } from 'react';
import HeroesComponent from '../components/HeroesComponent';
import api from '../services/api';

const sortData = (sort) => (characterOne, characterTwo) => {
  const name1 = characterOne.name;
  const name2 = characterTwo.name;
  return sort && name1.localeCompare(name2);
};

const filterAndSortProducts = ({ data, search, sort }) =>
  data
    .filter((d) => {
      const productName = d.name.toLowerCase();
      return productName.indexOf(search.toLowerCase()) > -1;
    })
    .sort(sortData(sort));

const HeroesContainer = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState(false);

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
      data={filterAndSortProducts({ data, search, sort })}
      handleChange={(e) => handleChange(e)}
      value={search}
      sortData={() => setSort((state) => !state)}
      sort={sort}
    />
  );
};

export default HeroesContainer;
