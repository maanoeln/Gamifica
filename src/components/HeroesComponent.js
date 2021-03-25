import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 50%;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
`;

const HeroesComponent = () => {
  return <Container>Container</Container>;
};

export default HeroesComponent;
