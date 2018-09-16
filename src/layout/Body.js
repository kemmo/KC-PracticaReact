import React from 'react';
import { Box } from 'rebass';
import { Board } from '../components';
import styled from 'styled-components';

const StyledBox = styled(Box)`
  background: #bdbdbd;
  padding: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  vertical-align: middle;
  height: 50vw;
`;

const Body = () => (
  <StyledBox>
    <Board />
  </StyledBox>
);

export default Body;
