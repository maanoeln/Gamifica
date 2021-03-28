import { PropTypes } from 'prop-types';
import React from 'react';
import PaginationComponent from '../components/PaginationComponent';

const PaginationContainer = ({
  activePage,
  handlePage,
  handleSetPage,
  totalPages,
}) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <PaginationComponent
      totalPages={totalPages}
      handlePage={handlePage}
      handleSetPage={handleSetPage}
      pages={pages}
      activePage={activePage}
    />
  );
};

PaginationContainer.propTypes = {
  activePage: PropTypes.number.isRequired,
  handlePage: PropTypes.func.isRequired,
  handleSetPage: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired,
};
export default PaginationContainer;
