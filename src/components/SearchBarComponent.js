import { Search, SortByAlpha, Star } from '@material-ui/icons';
import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: -webkit-sticky; /* Safari */
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
`;

const SearchInputContainer = styled.div`
  border-bottom: 1px solid #fffffc;
  outline: none;
  width: 30%;
  display: flex;
  padding-right: 8px;

  & input {
    width: 100%;
    outline: none;
    border: none;
    font-size: 24px;
    margin-left: 8px;
    color: #fffffc;
    background-color: transparent;
  }
`;

const FilterContainer = styled.div`
  width: 80px;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
`;

const CustomStar = styled(Star)`
  color: ${({ isClicked }) => (isClicked ? '#20a9fe' : '#fffffc')};

  :hover {
    cursor: pointer;
  }
`;

const CustomAlpha = styled(SortByAlpha)`
  color: ${({ isClicked }) => (isClicked ? '#20a9fe' : '#fffffc')};

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
        <CustomAlpha fontSize="large" isClicked={sort} onClick={sortData} />
        <CustomStar
          fontSize="large"
          isClicked={showFave}
          onClick={setShowFave}
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
