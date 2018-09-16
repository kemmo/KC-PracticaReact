import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  height: ${props => props.boxSize}px;
  width: ${props => props.boxSize}px;
`;

const StyledButton = styled.button`
  border-radius: 4px;
  padding: 0em 0em;
  margin: 0 0em;
  background: #eee;
  color: black;
  border: 1px solid grey;
  height: 100%;
  width: 100%;
`;

const SquareBox = ({ boxSize, value, onClick }) => {
  return (
    <StyledBox boxSize={boxSize}>
        <StyledButton onClick={() => onClick()}>
          {value}
        </StyledButton>
    </StyledBox>
  );
};

StyledBox.propTypes = {
  boxSize: PropTypes.number.isRequired,
}

SquareBox.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

export default SquareBox;
