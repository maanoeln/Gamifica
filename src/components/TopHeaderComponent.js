import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #292929;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    color: #20a9fe;
    transition: color ease-in-out 2s;
    font-size: 48px;
    background-color: transparent;

    :hover {
      color: #ff4b3e;
      cursor: pointer;
      transition: color ease-in-out 2s;
    }
  }
`;

const TopHeaderComponent = () => {
  return (
    <HeaderContainer>
      <h1>Marvelifica</h1>
    </HeaderContainer>
  );
};

export default TopHeaderComponent;
