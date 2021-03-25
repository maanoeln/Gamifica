import { Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  top: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInputContainer = styled.div`
  border-bottom: 1px solid #292929;
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
