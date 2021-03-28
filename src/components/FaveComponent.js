import { Star, StarOutline } from '@material-ui/icons';
import { PropTypes } from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Hover = styled.div`
  cursor: pointer;
`;
const FaveComponent = ({ id, isFave, handleFaves }) => {
  return (
    <Hover>
      {isFave() ? (
        <Star
          data-testid={`unfave${id}`}
          fontSize="large"
          onClick={(e) => handleFaves(e)}
        />
      ) : (
        <StarOutline
          data-testid={`fave${id}`}
          fontSize="large"
          onClick={(e) => handleFaves(e)}
        />
      )}
    </Hover>
  );
};

FaveComponent.propTypes = {
  id: PropTypes.number.isRequired,
  isFave: PropTypes.func.isRequired,
  handleFaves: PropTypes.func.isRequired,
};

export default FaveComponent;
