import React from 'react';
import styled from 'styled-components';
import HeroesCardComponent from './HeroesCardComponent';

const Container = styled.div`
  margin-top: 16px;
  width: 80%;
  min-height: 100%;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(5, 1fr);
  margin: 16px auto 16px;
`;

const HeroesComponent = () => {
  return (
    <Container>
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
      <HeroesCardComponent />
    </Container>
  );
};

export default HeroesComponent;
