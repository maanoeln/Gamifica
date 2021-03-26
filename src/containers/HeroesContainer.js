import React, { useEffect, useState } from 'react';
import HeroesComponent from '../components/HeroesComponent';
import api from '../services/api';

const HeroesContainer = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    api
      .get('/characters')
      .then((response) => setData(response.data.data.results))
      .catch((error) => console.log(error));
  }, []);

  const filteredProducts = data.filter((d) => {
    const productName = d.name.toLowerCase();
    return productName.indexOf(search.toLowerCase()) > -1;
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <HeroesComponent
      data={filteredProducts}
      handleChange={(e) => handleChange(e)}
      value={search}
    />
  );
};

export default HeroesContainer;
