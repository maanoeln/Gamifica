import { Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  width: 100%;
  top: 0;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  background-color: #292929;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.26);
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

const SearchBarComponent = () => {
  return (
    <SearchContainer>
      <SearchInputContainer>
        <Search fontSize="large" />
        <input type="text" placeHolder="Digite o nome do super-herói" />
      </SearchInputContainer>
    </SearchContainer>
  );
};

export default SearchBarComponent;
