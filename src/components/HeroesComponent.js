import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import HeroesCardComponent from './HeroesCardComponent';
import SearchBarComponent from './SearchBarComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  min-height: 100%;
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(5, 1fr);
  margin: 16px auto;
`;

const HeroesComponent = ({
  data,
  handleChange,
  setShowFave,
  showFave,
  sort,
  sortData,
  value,
  handleCharacterInfoPage,
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
            key={d.id}
            handleCharacterInfoPage={handleCharacterInfoPage(d.id)}
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
  isFave: PropTypes.func.isRequired,
  setShowFave: PropTypes.func.isRequired,
  showFave: PropTypes.bool.isRequired,
  sort: PropTypes.bool.isRequired,
  sortData: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleCharacterInfoPage: PropTypes.func.isRequired,
};

export default HeroesComponent;
