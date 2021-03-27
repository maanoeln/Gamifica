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

  @media (min-width: 320px) and (max-width: 549px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 550px) and (max-width: 809px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 810px) and (max-width: 1099px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1100px) and (max-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const HeroesComponent = ({
  data,
  handleChange,
  handleCharacterInfoPage,
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
  handleCharacterInfoPage: PropTypes.func.isRequired,
  setShowFave: PropTypes.func.isRequired,
  showFave: PropTypes.bool.isRequired,
  sort: PropTypes.bool.isRequired,
  sortData: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default HeroesComponent;
