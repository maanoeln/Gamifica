import React, { useEffect, useState } from 'react';
import HeroesComponent from '../components/HeroesComponent';
import api from '../services/api';

const HeroesContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    api
      .get('/characters')
      .then((response) => setData(response.data.data.results))
      .catch((error) => console.log(error));
  }, []);

  return <HeroesComponent data={data} />;
};

export default HeroesContainer;
