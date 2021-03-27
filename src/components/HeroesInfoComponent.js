import React from 'react';
import styled from 'styled-components';
import FaveContainer from '../containers/FaveContainer';

const Container = styled.div`
  width: 50%;
  height: 100%;
  margin: 24px auto;
  padding: 20px 0;
  display: flex;
`;

const PictureContainer = styled.div`
  width: 300px;
  height: 450px;
  background-image: ${({ imgUrl }) => `url("${imgUrl}")`};
  border-radius: 16px 0 16px 0;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 16px 16px;
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
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  width: 200px;
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.26);

  h3 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
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
                    <LastComics key={id}>
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

export default HeroesInfoComponent;
