import { PropTypes } from 'prop-types';
import React from 'react';
import FaveComponent from '../components/FaveComponent';
import { useFave } from '../context/FavesProvider';

const FaveContainer = ({ id }) => {
  const { handleFaves, isFave } = useFave();

  return (
    <FaveComponent id={id} isFave={isFave(id)} handleFaves={handleFaves(id)} />
  );
};

FaveContainer.propTypes = {
  id: PropTypes.number.isRequired,
};

export default FaveContainer;
