import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import HeroesCardComponent from './HeroesCardComponent';
import SearchBarComponent from './SearchBarComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  margin-top: 16px;
  width: 80%;
  min-height: 100%;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(5, 1fr);
  margin: 16px auto 16px;
`;

const HeroesComponent = ({ data, handleChange, sort, sortData, value }) => {
  return (
    <Container>
      <SearchBarComponent
        handleChange={handleChange}
        sort={sort}
        sortData={sortData}
        value={value}
      />
      <Grid>
        {data.map(({ id, ...d }) => (
          <HeroesCardComponent key={id} data={d} />
        ))}
      </Grid>
    </Container>
  );
};

HeroesComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleChange: PropTypes.func.isRequired,
  sort: PropTypes.bool.isRequired,
  sortData: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default HeroesComponent;
