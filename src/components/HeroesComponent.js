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

const HeroesComponent = ({
  data,
  handleChange,
  handleFaves,
  isFave,
  setShowFave,
  showFave,
  sort,
  sortData,
  value,
}) => {
  return (
    <Container>
      <SearchBarComponent
        handleChange={handleChange}
        setShowFave={setShowFave}
        showFave={showFave}
        sort={sort}
        sortData={sortData}
        value={value}
      />
      <Grid>
        {data.map((d) => (
          <HeroesCardComponent
            data={d}
            handleFaves={handleFaves(d.id)}
            isFave={isFave(d.id)}
            key={d.id}
          />
        ))}
      </Grid>
    </Container>
  );
};

HeroesComponent.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFaves: PropTypes.func.isRequired,
  isFave: PropTypes.bool.isRequired,
  setShowFave: PropTypes.func.isRequired,
  showFave: PropTypes.bool.isRequired,
  sort: PropTypes.bool.isRequired,
  sortData: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default HeroesComponent;
