import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  min-width: 250px;
  max-width: 300px;
  height: 250px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.16);
  transform: scale(1);
  transition: all ease-in-out 500ms;

  :hover {
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.36);
    transform: scale(1.05);
    transition: all ease-in-out 500ms;
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
