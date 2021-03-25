import React from 'react';
import styled from 'styled-components';
import HeroesCardComponent from './HeroesCardComponent';

const Container = styled.div`
  width: 50%;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
`;

const HeroesComponent = () => {
  return (
    <Container>
      <HeroesCardComponent />
    </Container>
  );
};

export default HeroesComponent;
