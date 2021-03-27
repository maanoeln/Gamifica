import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import FaveContainer from '../containers/FaveContainer';

const FaveIcon = styled.div`
  position: relative;
  width: 100%;
  display: none;
  right: 20px;
  top: 20px;
  z-index: 2;
  color: #ff4b3e;
`;

const CardContainer = styled.div`
  width: 250px;
  max-height: 330px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.16);

  :hover {
    cursor: pointer;
  }

  &:hover ${FaveIcon} {
    display: flex;
    justify-content: flex-end;
  }
`;

const ThumbnailContainer = styled.div`
  border-radius: 8px 8px 0 0;
  width: 250px;
  height: 250px;
  background-size: cover;
  background-image: ${({ imgUrl }) => `url("${imgUrl}")`};
`;

const CharacterName = styled.p`
  text-align: center;
  height: calc(100% - 250px);
  display: flex;
  align-items: center;
  font-size: 24px;
  margin: 10px auto;
`;

const HeroesCardComponent = ({ data, handleCharacterInfoPage }) => {
  const { id, thumbnail, name } = data;

  const imageUrl = `${thumbnail.path}/standard_fantastic.${thumbnail.extension}`;

  return (
    <CardContainer onClick={handleCharacterInfoPage}>
      <ThumbnailContainer imgUrl={imageUrl}>
        <FaveIcon>
          <FaveContainer id={id} />
        </FaveIcon>
      </ThumbnailContainer>

      <CharacterName>{name}</CharacterName>
    </CardContainer>
  );
};

HeroesCardComponent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired,
    }).isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  handleCharacterInfoPage: PropTypes.func.isRequired,
};

export default HeroesCardComponent;
