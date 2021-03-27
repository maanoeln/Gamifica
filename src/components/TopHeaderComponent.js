import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  background-color: #292929;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
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

const TopHeaderComponent = ({ goToHome }) => (
  <HeaderContainer>
    <h1 onClick={goToHome}>Gamifica</h1>
  </HeaderContainer>
);

TopHeaderComponent.propTypes = {
  goToHome: PropTypes.func.isRequired,
};

export default TopHeaderComponent;
