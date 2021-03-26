import { Star, StarOutline } from '@material-ui/icons';
import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

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
  width: 300px;
  height: 500px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.16);

  &:hover ${FaveIcon} {
    display: flex;
    justify-content: flex-end;
  }
`;

const ThumbnailContainer = styled.div`
  border-radius: 8px 8px 0 0;
  width: 300px;
  height: 450px;
  background-size: cover;
  background-image: ${({ imgUrl }) => `url("${imgUrl}")`};
`;

const CharacterName = styled.h2`
  align-self: center;
  margin: 20px 0;
`;

const HeroesCardComponent = ({ data, handleFaves, isFave }) => {
  const { thumbnail, name } = data;

  const imageUrl = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

  return (
    <CardContainer>
      <ThumbnailContainer imgUrl={imageUrl}>
        <FaveIcon>
          {isFave() ? (
            <Star fontSize="large" onClick={handleFaves} />
          ) : (
            <StarOutline fontSize="large" onClick={handleFaves} />
          )}
        </FaveIcon>
      </ThumbnailContainer>

      <CharacterName>{name}</CharacterName>
    </CardContainer>
  );
};

HeroesCardComponent.protoTypes = {
  data: PropTypes.shape({}).isRequired,
  handleFaves: PropTypes.func.isRequired,
  isFave: PropTypes.bool.isRequired,
};

export default HeroesCardComponent;
