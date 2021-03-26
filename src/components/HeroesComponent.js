import PropTypes from 'prop-types';
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

const HeroesComponent = ({ data }) => {
  return (
    <Container>
      {data.map(({ id, ...d }) => (
        <HeroesCardComponent key={id} data={d} />
      ))}
    </Container>
  );
};

HeroesComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default HeroesComponent;
