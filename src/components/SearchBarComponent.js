import { Search, SortByAlpha, Star } from '@material-ui/icons';
import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  top: -1px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  background-color: #292929;
  box-shadow: 0 8px 10px 2px rgba(0, 0, 0, 0.16);
  margin-bottom: 16px;
  color: #fffffc;

  @media (min-width: 320px) and (max-width: 420px) {
    flex-direction: column;
    height: 140px;
  }
`;

const SearchInputContainer = styled.div`
  border-bottom: 1px solid #fffffc;
  outline: none;
  width: 30%;
  display: flex;
  padding-right: 8px;

  input {
    width: 100%;
    outline: none;
    border: none;
    font-size: 24px;
    margin-left: 8px;
    color: #fffffc;
    background-color: transparent;
  }

  @media (min-width: 320px) and (max-width: 420px) {
    margin-top: 20px;
    width: 80%;
  }

  @media (min-width: 421px) and (max-width: 950px) {
    margin-top: 20px;
    width: 50%;
  }
  @media (min-width: 950px) and (max-width: 1200px) {
    margin-top: 20px;
    width: 50%;
  }
`;

const FilterContainer = styled.div`
  width: 80px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;

  @media (min-width: 320px) and (max-width: 420px) {
    margin: 20px 0;
  }
`;

const CustomStar = styled(Star)`
  color: ${({ $isSelected }) => ($isSelected ? '#20a9fe' : '#fffffc')};

  :hover {
    cursor: pointer;
  }
`;

const CustomAlpha = styled(SortByAlpha)`
  color: ${({ $isSelected }) => ($isSelected ? '#20a9fe' : '#fffffc')};

  :hover {
    cursor: pointer;
  }
`;

const SearchBarComponent = ({
  handleChange,
  setShowFave,
  showFave,
  sort,
  sortData,
  value,
}) => {
  return (
    <SearchContainer>
      <SearchInputContainer>
        <Search fontSize="large" />
        <input
          onChange={handleChange}
          placeholder="Digite o nome do super-herói"
          type="text"
          value={value}
        />
      </SearchInputContainer>

      <FilterContainer>
        <CustomAlpha
          fontSize="large"
          $isSelected={sort}
          onClick={sortData}
          data-testid={'sortData'}
        />
        <CustomStar
          fontSize="large"
          $isSelected={showFave}
          onClick={setShowFave}
          data-testid={'getFaves'}
        />
      </FilterContainer>
    </SearchContainer>
  );
};

SearchBarComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  setShowFave: PropTypes.func.isRequired,
  showFave: PropTypes.bool.isRequired,
  sort: PropTypes.bool.isRequired,
  sortData: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchBarComponent;
