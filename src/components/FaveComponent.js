import { Star, StarOutline } from '@material-ui/icons';
import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Hover = styled.div`
  cursor: pointer;
`;
const FaveComponent = ({ isFave, handleFaves }) => {
  return (
    <Hover>
      {isFave() ? (
        <Star fontSize="large" onClick={(e) => handleFaves(e)} />
      ) : (
        <StarOutline fontSize="large" onClick={(e) => handleFaves(e)} />
      )}
    </Hover>
  );
};

FaveComponent.propTypes = {
  isFave: PropTypes.func.isRequired,
  handleFaves: PropTypes.func.isRequired,
};

export default FaveComponent;
