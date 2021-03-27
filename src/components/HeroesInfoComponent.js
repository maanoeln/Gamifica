import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import FaveContainer from '../containers/FaveContainer';

const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 24px auto;
  padding: 20px 0;
  display: flex;

  @media (min-width: 320px) and (max-width: 880px) {
    align-items: center;
    flex-direction: column;
    width: 90%;
  }
`;

const PictureContainer = styled.div`
  align-self: center;
  width: 300px;
  height: 450px;
  margin-right: 20px;
  background-image: ${({ imgUrl }) => `url("${imgUrl}")`};
  border-radius: 16px 0 16px 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 16px 16px;

  @media (min-width: 320px) and (max-width: 880px) {
    width: 90%;
    margin: 20px 0;
  }

  @media (min-width: 881px) {
    width: 60%;
    margin: 20px 0;
  }
`;

const SingleInfoContainer = styled.div`
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  h3 {
    margin-top: 5px;
    :nth-child(2n) {
      text-align: justify;
    }
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const LastComics = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-top: 5px;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.26);

  h3 {
    width: 200px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    align-self: center;
    text-align: center;
  }

  @media only screen and (max-width: 1000px) {
    width: 100%;
    h3 {
      width: 100%;
    }
  }

  @media only screen and (min-width: 1200px) {
    width: 300px;
  }
`;

const HeroesInfoComponent = ({ character, comics }) => {
  const { id, name, description, thumbnail } = character;

  const imageUrl = `${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`;

  return (
    <Container>
      <PictureContainer imgUrl={imageUrl} />

      <InfoContainer>
        <Row>
          <SingleInfoContainer style={{ flex: 0.5 }}>
            <p>Nome</p>
            <h3>{name}</h3>
          </SingleInfoContainer>
          <FaveContainer id={id} />
        </Row>

        <SingleInfoContainer>
          <p>Descrição</p>
          <h3>
            {description.length
              ? description
              : 'Não há descrição para esse personagem'}
          </h3>
        </SingleInfoContainer>

        <SingleInfoContainer>
          <p>Últimos quadrinhos</p>
          <Row>
            {comics.length > 0 ? (
              comics.map(
                ({ title }, idx) =>
                  idx < 10 && (
                    <LastComics key={`${idx}-${title}`}>
                      <h3>{title}</h3>
                    </LastComics>
                  )
              )
            ) : (
              <h3>Não há quadrinhos para esse personagem</h3>
            )}
          </Row>
        </SingleInfoContainer>
      </InfoContainer>
    </Container>
  );
};

HeroesInfoComponent.propTypes = {
  character: PropTypes.shape({}).isRequired,
  comics: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default HeroesInfoComponent;
