import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 10px rgba(32, 169, 254, 0.16);
  transform: scale(1);
  transition: transform box-shadow ease-in-out 1s;

  :hover {
    box-shadow: 3px 3px 15px rgba(32, 169, 254, 0.36);
    transform: scale(1.05);
    transition: transform box-shadow ease-in-out 1s;
  }
`;

const HeroesCardComponent = () => {
  return (
    <CardContainer>
      <div>Favoritar</div>
      <h2>Super herois</h2>
      <p>Super herois super poderes</p>
    </CardContainer>
  );
};

export default HeroesCardComponent;
