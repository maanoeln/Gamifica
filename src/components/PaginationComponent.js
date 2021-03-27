import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  margin: 0 20px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const PageNumber = styled.span`
  margin: 20px 10px;
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.16);
  padding: 8px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.26);

  :hover {
    cursor: pointer;
  }
`;

const PaginationComponent = ({
  activePage,
  handlePage,
  handleSetPage,
  pages,
}) => (
  <PaginationContainer>
    <PageNumber
      onClick={() => handlePage({ type: `BACKWARD`, page: activePage })}
    >
      {`<`}
    </PageNumber>
    {pages.map(p => (
      <PageNumber key={p} onClick={() => handleSetPage(p)}>
        {p}
      </PageNumber>
    ))}
    <PageNumber
      onClick={() => handlePage({ type: `FORWARD`, page: activePage })}
    >{`>`}</PageNumber>
  </PaginationContainer>
);

PaginationComponent.defaultProps = {
  activePage: 1,
};

PaginationComponent.propTypes = {
  activePage: PropTypes.number,
  handlePage: PropTypes.func.isRequired,
  handleSetPage: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(PropTypes.number).isRequired,
};
export default PaginationComponent;
